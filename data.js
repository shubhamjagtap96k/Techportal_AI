const categories = [
    {
        id: 'frontend',
        name: 'Frontend Development',
        icon: '💻',
        description: 'Building the visual part of the web.',
        subcategories: [
            {
                id: 'frameworks',
                name: 'Frameworks & Libraries',
                questions: [
                    {
                        id: 'frontend_framework',
                        text: 'Which framework/library are you interested in?',
                        options: [
                            { label: 'React', value: 'react' },
                            { label: 'Vue', value: 'vue' },
                            { label: 'Angular', value: 'angular' },
                            { label: 'Svelte', value: 'svelte' }
                        ]
                    }
                ],
                resources: {
                    react: [
                        { name: 'Vercel v0', url: 'https://v0.dev/', type: 'ai', description: 'Generative UI system by Vercel. Describe your UI and get React code.' },
                        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', type: 'ai', description: 'Your AI pair programmer. Great for React component generation.' },
                        { name: 'React Docs', url: 'https://react.dev/', type: 'learn', description: 'Official documentation.' },
                        { name: 'Vite', url: 'https://vitejs.dev/', type: 'tool', description: 'Frontend tooling.' }
                    ],
                    vue: [
                        { name: 'Vue Vixens (Community)', url: 'https://vuevixens.org/', type: 'community', description: 'Inclusive Vue.js community.' },
                        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', type: 'ai', description: 'Works excellently with Vue templates and composition API.' },
                        { name: 'Vue.js Docs', url: 'https://vuejs.org/', type: 'learn', description: 'The Progressive JavaScript Framework.' }
                    ],
                    angular: [
                        { name: 'Angular AI', url: 'https://github.com/angular/angular-ai', type: 'ai', description: 'Experimental AI features for Angular (check recent updates).' },
                        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', type: 'ai', description: 'Helps with boilerplate and complex Angular classes.' },
                        { name: 'Angular.io', url: 'https://angular.io/', type: 'learn', description: 'Platform for building mobile and desktop web applications.' }
                    ],
                    svelte: [
                        { name: 'Svelte', url: 'https://svelte.dev/', type: 'learn', description: 'Cybernetically enhanced web apps.' },
                        { name: 'Cursor', url: 'https://cursor.sh/', type: 'ai', description: 'The AI-first Code Editor. Works great with SvelteKit.' }
                    ]
                }
            },
            {
                id: 'styling',
                name: 'Styling & Design',
                questions: [
                    {
                        id: 'css_preference',
                        text: 'What is your styling preference?',
                        options: [
                            { label: 'CSS/Sass', value: 'css' },
                            { label: 'Tailwind', value: 'tailwind' },
                            { label: 'CSS-in-JS', value: 'css_in_js' }
                        ]
                    }
                ],
                resources: {
                    css: [
                        { name: 'Polypane', url: 'https://polypane.app/', type: 'tool', description: 'Browser for responsive web development.' }
                    ],
                    tailwind: [
                        { name: 'Tailwind UI', url: 'https://tailwindui.com/', type: 'tool', description: 'Official components.' },
                        { name: 'Windy', url: 'https://usewindy.com/', type: 'ai', description: 'AI powered Tailwind CSS generator.' }
                    ],
                    css_in_js: [
                        { name: 'Styled Components', url: 'https://styled-components.com/', type: 'tool', description: 'Visual primitives.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'backend',
        name: 'Backend Development',
        icon: '⚙️',
        description: 'Server-side logic and databases.',
        subcategories: [
            {
                id: 'languages',
                name: 'Server Languages',
                questions: [
                    {
                        id: 'backend_lang',
                        text: 'Choose your primary backend language:',
                        options: [
                            { label: 'Node.js', value: 'node' },
                            { label: 'Python', value: 'python' },
                            { label: 'Java', value: 'java' },
                            { label: 'Go', value: 'go' }
                        ]
                    }
                ],
                resources: {
                    node: [
                        { name: 'Amazon Q', url: 'https://aws.amazon.com/q/', type: 'ai', description: 'AI assistant for software development and upgrading Node versions.' },
                        { name: 'Tabnine', url: 'https://www.tabnine.com/', type: 'ai', description: 'AI assistant for faster coding.' },
                        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', type: 'ai', description: 'Excellent for writing node.js APIs and tests.' },
                        { name: 'Node.js Docs', url: 'https://nodejs.org/en/docs/', type: 'learn', description: 'Official Docs.' }
                    ],
                    python: [
                        { name: 'Cursor', url: 'https://cursor.sh/', type: 'ai', description: 'AI editor that understands Python contexts deeply.' },
                        { name: 'Codeium', url: 'https://codeium.com/', type: 'ai', description: 'Free AI code completion tool for Python.' },
                        { name: 'Tabnine', url: 'https://www.tabnine.com/', type: 'ai', description: 'AI assistant that speeds up delivery and keeps code safe.' },
                        { name: 'Python.org', url: 'https://www.python.org/', type: 'learn', description: 'Official Home.' }
                    ],
                    java: [
                        { name: 'Diffblue Cover', url: 'https://www.diffblue.com/', type: 'ai', description: 'AI that automatically writes unit tests for Java.' },
                        { name: 'IntelliJ AI Assistant', url: 'https://www.jetbrains.com/ai/', type: 'ai', description: 'Integrated AI for Java development.' },
                        { name: 'Spring modules', url: 'https://spring.io/projects/spring-ai', type: 'tool', description: 'Spring AI - Application Framework for AI Engineering.' }
                    ],
                    go: [
                        { name: 'Go Documentation', url: 'https://go.dev/doc/', type: 'learn', description: 'Official Docs.' },
                        { name: 'Copilot', url: 'https://github.com/features/copilot', type: 'ai', description: 'Effective for idiomatic Go code generation.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'database',
        name: 'Databases',
        icon: '🗄️',
        description: 'Storing and managing data.',
        subcategories: [
            {
                id: 'db_type',
                name: 'Database Type',
                questions: [
                    {
                        id: 'sql_nosql',
                        text: 'SQL or NoSQL?',
                        options: [
                            { label: 'SQL (Relational)', value: 'sql' },
                            { label: 'NoSQL (Non-relational)', value: 'nosql' }
                        ]
                    }
                ],
                resources: {
                    sql: [
                        { name: 'Text-to-SQL (Vanna.ai)', url: 'https://vanna.ai/', type: 'ai', description: 'Chat with your SQL database using AI.' },
                        { name: 'Supabase AI', url: 'https://supabase.com/docs/guides/ai', type: 'ai', description: 'Auto-generate SQL, Row Level Security policies, and more.' },
                        { name: 'PostgreSQL', url: 'https://www.postgresql.org/', type: 'tool', description: 'Advanced Open Source Database.' }
                    ],
                    nosql: [
                        { name: 'MongoDB Atlas Vector Search', url: 'https://www.mongodb.com/products/platform/atlas-vector-search', type: 'ai', description: 'Build intelligent apps with vector search.' },
                        { name: 'Redis', url: 'https://redis.io/', type: 'tool', description: 'In-memory data store.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'cloud',
        name: 'Cloud & DevOps',
        icon: '☁️',
        description: 'Deploying and managing infrastructure.',
        subcategories: [
            {
                id: 'cloud_provider',
                name: 'Cloud Providers',
                questions: [
                    {
                        id: 'provider_choice',
                        text: 'Which cloud provider?',
                        options: [
                            { label: 'AWS', value: 'aws' },
                            { label: 'Google Cloud', value: 'gcp' },
                            { label: 'Azure', value: 'azure' }
                        ]
                    }
                ],
                resources: {
                    aws: [
                        { name: 'Amazon Q Developer', url: 'https://aws.amazon.com/q/developer/', type: 'ai', description: 'AI assistant for generic coding and AWS infrastructure.' },
                        { name: 'AWS Bedrock', url: 'https://aws.amazon.com/bedrock/', type: 'tool', description: 'The easiest way to build and scale generative AI applications.' }
                    ],
                    gcp: [
                        { name: 'Duet AI for Google Cloud', url: 'https://cloud.google.com/duet-ai', type: 'ai', description: 'Review code, deploy fast, and troubleshoot with AI.' },
                        { name: 'Firebase', url: 'https://firebase.google.com/', type: 'tool', description: 'App development platform.' }
                    ],
                    azure: [
                        { name: 'Microsoft Copilot for Azure', url: 'https://learn.microsoft.com/en-us/azure/copilot/overview', type: 'ai', description: 'AI companion to help you design, operate, optimize, and troubleshoot.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ai_ml',
        name: 'AI & Machine Learning',
        icon: '🤖',
        description: 'Integrating intelligence into apps.',
        subcategories: [
            {
                id: 'ai_goals',
                name: 'AI Goals',
                questions: [
                    {
                        id: 'ai_task',
                        text: 'What do you want to achieve?',
                        options: [
                            { label: 'Use LLMs', value: 'llm' },
                            { label: 'Build Models', value: 'ml_build' },
                            { label: 'Computer Vision', value: 'cv' }
                        ]
                    }
                ],
                resources: {
                    llm: [
                        { name: 'OpenAI API', url: 'https://platform.openai.com/', type: 'tool', description: 'Build with ChatGPT and extensive language models.' },
                        { name: 'LangChain', url: 'https://langchain.com/', type: 'tool', description: 'Framework for developing applications powered by language models.' },
                        { name: 'Anthropic Claude', url: 'https://www.anthropic.com/', type: 'ai', description: 'Next-generation AI assistant for your tasks.' }
                    ],
                    ml_build: [
                        { name: 'Hugging Face', url: 'https://huggingface.co/', type: 'community', description: 'The GitHub of AI. Models, datasets, and spaces.' },
                        { name: 'Kaggle', url: 'https://www.kaggle.com/', type: 'community', description: 'Learn, compete, and share code.' }
                    ],
                    cv: [
                        { name: 'Roboflow', url: 'https://roboflow.com/', type: 'ai', description: 'Build computer vision models faster with AI labeling.' },
                        { name: 'OpenCV', url: 'https://opencv.org/', type: 'tool', description: 'Open Source Computer Vision Library.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'ui_ux',
        name: 'UI/UX Design',
        icon: '🎨',
        description: 'Designing beautiful interfaces.',
        subcategories: [
            {
                id: 'design_tools',
                name: 'Design Tools',
                questions: [],
                resources: {
                    default: [
                        { name: 'Galileo AI', url: 'https://www.usegalileo.ai/', type: 'ai', description: 'Generative AI for Interface Design.' },
                        { name: 'Uizard', url: 'https://uizard.io/', type: 'ai', description: 'Design wireframes, mockups, and prototypes in minutes with AI.' },
                        { name: 'Figma (with AI plugins)', url: 'https://www.figma.com/', type: 'tool', description: 'Industry standard design tool.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'mobile',
        name: 'Mobile Development',
        icon: '📱',
        description: 'Building apps for iOS and Android.',
        subcategories: [
            {
                id: 'cross_platform',
                name: 'Cross Platform',
                questions: [
                    {
                        id: 'mobile_tech',
                        text: 'Choose your framework:',
                        options: [
                            { label: 'React Native', value: 'react_native' },
                            { label: 'Flutter', value: 'flutter' }
                        ]
                    }
                ],
                resources: {
                    react_native: [
                        { name: 'Expo', url: 'https://expo.dev/', type: 'tool', description: 'Make any app. Run it everywhere.' },
                        { name: 'React Native Docs', url: 'https://reactnative.dev/', type: 'learn', description: 'Learn logic once, write everywhere.' },
                        { name: 'Morflax', url: 'https://morflax.com/', type: 'ai', description: '3D device mockups generator.' }
                    ],
                    flutter: [
                        { name: 'FlutterFlow', url: 'https://flutterflow.io/', type: 'ai', description: 'Build functional apps with visual builder and AI.' },
                        { name: 'Flutter Docs', url: 'https://flutter.dev/', type: 'learn', description: 'Google\'s UI toolkit for building beautiful apps.' }
                    ]
                }
            },
            {
                id: 'native',
                name: 'Native Development',
                questions: [
                    {
                        id: 'native_os',
                        text: 'Which OS?',
                        options: [
                            { label: 'iOS (Swift)', value: 'ios' },
                            { label: 'Android (Kotlin)', value: 'android' }
                        ]
                    }
                ],
                resources: {
                    ios: [
                        { name: 'SwiftUI', url: 'https://developer.apple.com/xcode/swiftui/', type: 'learn', description: 'Build apps across all Apple platforms.' },
                        { name: 'Xcode', url: 'https://developer.apple.com/xcode/', type: 'tool', description: 'Apple\'s integrated development environment.' }
                    ],
                    android: [
                        { name: 'Android Studio', url: 'https://developer.android.com/studio', type: 'tool', description: 'The official IDE for Android.' },
                        { name: 'Studio Bot', url: 'https://developer.android.com/studio/preview/studio-bot', type: 'ai', description: 'AI companion for Android development.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'devops',
        name: 'DevOps & CI/CD',
        icon: '🚀',
        description: 'Automating software delivery.',
        subcategories: [
            {
                id: 'automation',
                name: 'Automation Tools',
                questions: [
                    {
                        id: 'devops_tool',
                        text: 'What do you need?',
                        options: [
                            { label: 'Containers', value: 'containers' },
                            { label: 'CI/CD Pipelines', value: 'cicd' }
                        ]
                    }
                ],
                resources: {
                    containers: [
                        { name: 'Docker', url: 'https://www.docker.com/', type: 'tool', description: 'OS-level virtualization.' },
                        { name: 'Kubernetes', url: 'https://kubernetes.io/', type: 'tool', description: 'Container orchestration.' }
                    ],
                    cicd: [
                        { name: 'GitHub Actions', url: 'https://github.com/features/actions', type: 'tool', description: 'Automate your workflow from idea to production.' },
                        { name: 'CircleCI', url: 'https://circleci.com/', type: 'tool', description: 'Continuous integration and delivery platform.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'security',
        name: 'Cybersecurity',
        icon: '🛡️',
        description: 'Protecting systems and data.',
        subcategories: [
            {
                id: 'sec_tools',
                name: 'Security Tools',
                questions: [],
                resources: {
                    default: [
                        { name: 'Snyk', url: 'https://snyk.io/', type: 'ai', description: 'Developer security platform. Fix vulnerabilities with AI.' },
                        { name: 'OWASP', url: 'https://owasp.org/', type: 'learn', description: 'Open Web Application Security Project.' },
                        { name: 'Burp Suite', url: 'https://portswigger.net/burp', type: 'tool', description: 'Application security testing software.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'automation_agents',
        name: 'Automation Agents',
        icon: '🦾',
        description: 'Autonomous AI agents and workflow automation.',
        subcategories: [
            {
                id: 'autonomous',
                name: 'Autonomous Agents',
                questions: [
                    {
                        id: 'agent_pref',
                        text: 'What kind of agent?',
                        options: [
                            { label: 'Browser-based', value: 'browser' },
                            { label: 'Terminal/Local', value: 'local' }
                        ]
                    }
                ],
                resources: {
                    browser: [
                        { name: 'AgentGPT', url: 'https://agentgpt.reworkd.ai/', type: 'ai', description: 'Assemble and deploy autonomous AI agents in the browser.' },
                        { name: 'Cognosys', url: 'https://www.cognosys.ai/', type: 'ai', description: 'Web-based AI agent to automate complex tasks.' }
                    ],
                    local: [
                        { name: 'AutoGPT', url: 'https://github.com/Significant-Gravitas/Auto-GPT', type: 'ai', description: 'An experimental open-source attempt to make GPT-4 fully autonomous.' },
                        { name: 'BabyAGI', url: 'https://github.com/yoheinakajima/babyagi', type: 'ai', description: 'Task-driven autonomous agent.' },
                        { name: 'SuperAGI', url: 'https://superagi.com/', type: 'ai', description: 'Open-source autonomous AI agent framework.' }
                    ]
                }
            },
            {
                id: 'workflow',
                name: 'Workflow Automation',
                questions: [
                    {
                        id: 'automation_type',
                        text: 'Automation preference:',
                        options: [
                            { label: 'Visual / No-Code (Free Tier)', value: 'visual' },
                            { label: 'Open Source / Self-Hosted', value: 'opensource' }
                        ]
                    }
                ],
                resources: {
                    visual: [
                        { name: 'Zapier', url: 'https://zapier.com/', type: 'tool', description: 'Connect apps and automate workflows (Free tier available).' },
                        { name: 'Make', url: 'https://www.make.com/', type: 'tool', description: 'Visual platform to automate tasks (Generous free tier).' }
                    ],
                    opensource: [
                        { name: 'n8n', url: 'https://n8n.io/', type: 'tool', description: 'Fair-code workflow automation tool. Free to self-host.' },
                        { name: 'Activepieces', url: 'https://www.activepieces.com/', type: 'tool', description: 'Open source no-code business automation.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'data_science',
        name: 'Data Science',
        icon: '📊',
        description: 'Analyse data and build insights.',
        subcategories: [
            {
                id: 'ds_tools',
                name: 'DS Tooling',
                questions: [
                    {
                        id: 'ds_focus',
                        text: 'What is your main focus?',
                        options: [
                            { label: 'Data Analysis', value: 'analysis' },
                            { label: 'Visualisation', value: 'viz' },
                            { label: 'Big Data / ETL', value: 'etl' }
                        ]
                    }
                ],
                resources: {
                    analysis: [
                        { name: 'Jupyter AI', url: 'https://jupyter-ai.readthedocs.io/', type: 'ai', description: 'AI magic commands inside Jupyter notebooks.' },
                        { name: 'Pandas', url: 'https://pandas.pydata.org/', type: 'tool', description: 'Data analysis and manipulation library for Python.' },
                        { name: 'Kaggle', url: 'https://www.kaggle.com/', type: 'community', description: 'Datasets, notebooks, and competitions.' }
                    ],
                    viz: [
                        { name: 'ChartGPT', url: 'https://www.chartgpt.dev/', type: 'ai', description: 'Describe a chart in plain English and get it instantly.' },
                        { name: 'Plotly', url: 'https://plotly.com/', type: 'tool', description: 'Interactive graphing library for Python and JS.' }
                    ],
                    etl: [
                        { name: 'dbt', url: 'https://www.getdbt.com/', type: 'tool', description: 'Transform data in your warehouse using SQL.' },
                        { name: 'Apache Spark', url: 'https://spark.apache.org/', type: 'tool', description: 'Unified analytics engine for big data.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'game_dev',
        name: 'Game Development',
        icon: '🎮',
        description: 'Build 2D and 3D gaming experiences.',
        subcategories: [
            {
                id: 'game_engine',
                name: 'Game Engines',
                questions: [
                    {
                        id: 'engine_choice',
                        text: 'Which engine are you using?',
                        options: [
                            { label: 'Unity', value: 'unity' },
                            { label: 'Unreal Engine', value: 'unreal' },
                            { label: 'Godot', value: 'godot' }
                        ]
                    }
                ],
                resources: {
                    unity: [
                        { name: 'Unity Muse', url: 'https://unity.com/products/muse', type: 'ai', description: 'AI-powered creation inside the Unity Editor.' },
                        { name: 'Unity Docs', url: 'https://docs.unity3d.com/', type: 'learn', description: 'Official Unity documentation.' }
                    ],
                    unreal: [
                        { name: 'Unreal Engine', url: 'https://www.unrealengine.com/', type: 'tool', description: 'Powerful 3D creation suite from Epic Games.' },
                        { name: 'Suno (Audio)', url: 'https://www.suno.ai/', type: 'ai', description: 'Generate game music and soundscapes with AI.' }
                    ],
                    godot: [
                        { name: 'Godot Engine', url: 'https://godotengine.org/', type: 'tool', description: 'Free, open-source game engine. Great for 2D.' },
                        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', type: 'ai', description: 'Helps write GDScript logic faster.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'blockchain',
        name: 'Blockchain & Web3',
        icon: '⛓️',
        description: 'Decentralised apps and smart contracts.',
        subcategories: [
            {
                id: 'web3_tools',
                name: 'Web3 Tooling',
                questions: [
                    {
                        id: 'web3_stack',
                        text: 'What are you building?',
                        options: [
                            { label: 'Smart Contracts', value: 'contracts' },
                            { label: 'DApps / Frontend', value: 'dapps' }
                        ]
                    }
                ],
                resources: {
                    contracts: [
                        { name: 'Hardhat', url: 'https://hardhat.org/', type: 'tool', description: 'Ethereum development environment.' },
                        { name: 'OpenZeppelin', url: 'https://openzeppelin.com/', type: 'tool', description: 'Secure smart contract library.' },
                        { name: 'Alchemy', url: 'https://www.alchemy.com/', type: 'tool', description: 'Web3 development platform and node provider.' }
                    ],
                    dapps: [
                        { name: 'RainbowKit', url: 'https://rainbowkit.com/', type: 'tool', description: 'Best way to connect a wallet to your DApp.' },
                        { name: 'Wagmi', url: 'https://wagmi.sh/', type: 'tool', description: 'React hooks for Ethereum.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'testing_qa',
        name: 'Testing & QA',
        icon: '🧪',
        description: 'Ensure quality with automated testing.',
        subcategories: [
            {
                id: 'test_type',
                name: 'Testing Type',
                questions: [
                    {
                        id: 'test_choice',
                        text: 'What kind of testing?',
                        options: [
                            { label: 'Unit / Integration', value: 'unit' },
                            { label: 'E2E / Browser', value: 'e2e' },
                            { label: 'Performance', value: 'perf' }
                        ]
                    }
                ],
                resources: {
                    unit: [
                        { name: 'Vitest', url: 'https://vitest.dev/', type: 'tool', description: 'Blazing fast unit test framework.' },
                        { name: 'Jest', url: 'https://jestjs.io/', type: 'tool', description: 'Delightful JavaScript testing.' },
                        { name: 'Diffblue Cover', url: 'https://www.diffblue.com/', type: 'ai', description: 'AI that auto-generates unit tests for Java.' }
                    ],
                    e2e: [
                        { name: 'Playwright', url: 'https://playwright.dev/', type: 'tool', description: 'Reliable end-to-end testing for modern web apps.' },
                        { name: 'Cypress', url: 'https://www.cypress.io/', type: 'tool', description: 'Fast, easy and reliable testing for anything that runs in a browser.' }
                    ],
                    perf: [
                        { name: 'k6', url: 'https://k6.io/', type: 'tool', description: 'Open-source performance testing tool.' },
                        { name: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/', type: 'tool', description: 'Automated auditing for performance and quality.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'language_models',
        name: 'Language Models',
        icon: '💬',
        description: 'Advanced LLMs for text generation and reasoning.',
        subcategories: [
            {
                id: 'llm_providers',
                name: 'LLM Providers',
                questions: [],
                resources: {
                    default: [
                        { name: 'OpenAI GPT-4', url: 'https://openai.com/', type: 'ai', description: 'Industry leading language model.' },
                        { name: 'Anthropic Claude 3', url: 'https://www.anthropic.com/', type: 'ai', description: 'Advanced reasoning and large context windows.' },
                        { name: 'Google Gemini', url: 'https://gemini.google.com/', type: 'ai', description: 'Multimodal AI model by Google.' },
                        { name: 'Meta Llama 3', url: 'https://llama.meta.com/', type: 'ai', description: 'Open-source state-of-the-art model.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'image_gen',
        name: 'Image Generation',
        icon: '🖼️',
        description: 'Generate and edit images using AI.',
        subcategories: [
            {
                id: 'image_tools',
                name: 'Image Tools',
                questions: [],
                resources: {
                    default: [
                        { name: 'Midjourney', url: 'https://www.midjourney.com/', type: 'ai', description: 'High-quality artistic AI image generation.' },
                        { name: 'DALL-E 3', url: 'https://openai.com/dall-e-3', type: 'ai', description: 'Image generation integrated with ChatGPT.' },
                        { name: 'Stable Diffusion', url: 'https://stability.ai/', type: 'tool', description: 'Open-source image generation model.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'voice_audio',
        name: 'Voice & Audio',
        icon: '🎵',
        description: 'Text-to-speech, transcription, and music generation.',
        subcategories: [
            {
                id: 'audio_tools',
                name: 'Audio AI Tools',
                questions: [],
                resources: {
                    default: [
                        { name: 'ElevenLabs', url: 'https://elevenlabs.io/', type: 'ai', description: 'Highly realistic text-to-speech and voice cloning.' },
                        { name: 'Suno AI', url: 'https://www.suno.ai/', type: 'ai', description: 'Generate songs and music from text descriptions.' },
                        { name: 'OpenAI Whisper', url: 'https://github.com/openai/whisper', type: 'tool', description: 'Robust, open-source speech recognition.' }
                    ]
                }
            }
        ]
    },
    {
        id: 'code_assistants',
        name: 'Code Assistants',
        icon: '🧑‍💻',
        description: 'AI pair programmers and coding tools.',
        subcategories: [
            {
                id: 'coding_ai',
                name: 'AI Coding Tools',
                questions: [],
                resources: {
                    default: [
                        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', type: 'ai', description: 'AI pair programmer tightly integrated with IDEs.' },
                        { name: 'Cursor', url: 'https://cursor.sh/', type: 'ai', description: 'The AI-first code editor and IDE.' },
                        { name: 'Codeium', url: 'https://codeium.com/', type: 'ai', description: 'Free AI code completion and chat.' },
                        { name: 'Amazon Q', url: 'https://aws.amazon.com/q/developer/', type: 'ai', description: 'AI assistant for software development.' }
                    ]
                }
            }
        ]
    }
];
