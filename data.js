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
    }
];
