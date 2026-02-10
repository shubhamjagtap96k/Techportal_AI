// categories is loaded from data.js

const categoryGrid = document.getElementById('categories');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

// State
let currentCategory = null;
let currentSubcategory = null;

// Initialize
function init() {
    renderCategories();
    setupEventListeners();
}

function renderCategories() {
    categoryGrid.innerHTML = '';
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h2 class="category-title">${category.name}</h2>
            <p class="category-desc">${category.description}</p>
        `;

        // Random float delay for antigravity effect
        const randomDelay = Math.random() * 5; // 0 to 5 seconds
        card.style.setProperty('--float-delay', `-${randomDelay}s`);

        // Mouse tracking for glow effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('click', () => openCategory(category));
        categoryGrid.appendChild(card);
    });
}

function openCategory(category) {
    currentCategory = category;
    modalOverlay.classList.add('active');
    renderSubcategories(category);
}

function renderSubcategories(category) {
    const subcats = category.subcategories;

    // If only one subcategory or direct resources, skip straight to questions or resources (simplified for now, usually we list subcats)
    // For this UI, let's list the subcategories if there are multiple, or jump to questions if 1

    let content = `
        <div class="modal-header">
            <h2 class="modal-title">${category.name}</h2>
            <p>Select a specific domain:</p>
        </div>
        <div class="options-grid">
            ${subcats.map(sc => `
                <button class="option-btn" data-id="${sc.id}">${sc.name}</button>
            `).join('')}
        </div>
    `;

    modalBody.innerHTML = content;

    // Add listeners to subcategory buttons
    const buttons = modalBody.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const subId = btn.getAttribute('data-id');
            const subcat = category.subcategories.find(s => s.id === subId);
            startQuestionFlow(subcat);
        });
    });
}

function startQuestionFlow(subcategory) {
    if (!subcategory.questions || subcategory.questions.length === 0) {
        // No questions, show default resources
        showResources(subcategory, 'default');
        return;
    }

    // For simplicity, we handle just one question for now. Recursive flow can be added later.
    const question = subcategory.questions[0];

    const content = `
        <button class="back-btn" id="back-to-subcats">← Back</button>
        <div class="modal-header">
            <h2 class="modal-title">${subcategory.name}</h2>
            <p>${question.text}</p>
        </div>
        <div class="options-grid">
            ${question.options.map(opt => `
                <button class="option-btn" data-val="${opt.value}">${opt.label}</button>
            `).join('')}
        </div>
    `;

    modalBody.innerHTML = content;

    // Back Button
    document.getElementById('back-to-subcats').addEventListener('click', () => renderSubcategories(currentCategory));

    // Listeners for options
    const buttons = modalBody.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-val');
            showResources(subcategory, val);
        });
    });
}

function showResources(subcategory, filterKey) {
    const resources = subcategory.resources[filterKey] || [];

    const content = `
        <button class="back-btn" id="back-to-questions">← Back</button>
        <div class="modal-header">
            <h2 class="modal-title">Top AI Tools & Resources</h2>
            <p>Curated AI assistants and tools for this stack.</p>
        </div>
        <div class="resources-list">
            ${resources.length > 0 ? resources.map(res => `
                <a href="${res.url}" target="_blank" class="resource-card">
                    <div class="resource-header">
                        <span class="resource-name">${res.name}</span>
                        <span class="resource-type ${res.type}">${res.type}</span>
                    </div>
                    <p class="resource-desc">${res.description}</p>
                </a>
            `).join('') : '<p style="text-align:center; color:var(--text-secondary)">No resources found for this selection.</p>'}
        </div>
    `;

    modalBody.innerHTML = content;

    // Back Button logic needs to know where it came from. 
    // If it was 'default' (no questions), go back to subcategories.
    // If it was from a question, go back to question.
    // Simplified: Just go back to restart the subcategory flow for now.
    document.getElementById('back-to-questions').addEventListener('click', () => {
        if (!subcategory.questions || subcategory.questions.length === 0) {
            renderSubcategories(currentCategory);
        } else {
            startQuestionFlow(subcategory);
        }
    });
}

function setupEventListeners() {
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        currentCategory = null;
    });

    // Close on click outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            currentCategory = null;
        }
    });
}

init();
