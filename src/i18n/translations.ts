export type Language = "en" | "zh";

const en = {
  nav: {
    home: "Home",
    features: "Features",
    download: "Download",
    docs: "Docs",
    contact: "Contact",
    downloadCta: "Download",
  },
  home: {
    badge: "v0.1.0 — Open Source Desktop Translator",
    heroTitle: "Translate Anything,",
    heroTitleAccent: "Anywhere",
    heroDesc:
      "TransLite is a lightweight desktop translation app that combines local offline models with powerful online LLM providers. Switch between providers instantly with a global hotkey.",
    downloadForWindows: "Download for Windows",
    learnMore: "Learn More",
    seeInActionTitle: "See It in Action",
    seeInActionSubtitle:
      "Clean, intuitive interface designed for fast translation workflows.",
    workspaceTitle: "Translation Workspace",
    workspaceDesc: "Fast, side-by-side translation interface",
    settingsTitle: "Provider Settings",
    settingsDesc: "Manage LLM providers and API keys",
    featuresTitle: "Powerful Features",
    featuresSubtitle:
      "Everything you need for seamless, high-quality translation.",
    viewAllFeatures: "View All Features",
    providersTitle: "Multi-Provider Support",
    providersSubtitle:
      "Choose from a wide range of local and cloud translation engines.",
    ctaTitle: "Ready to Get Started?",
    ctaDesc:
      "Download TransLite today and experience fast, privacy-focused translation on your desktop.",
    downloadNow: "Download Now",
    readDocs: "Read the Docs",
  },
  featureGrid: [
    {
      title: "Global Shortcut",
      description:
        "Quick-open the translation window from anywhere with a global hotkey. No context switching needed.",
    },
    {
      title: "Local Model Translation",
      description:
        "Fully offline translation using ONNX-based local models. No internet required — your data stays on your device.",
    },
    {
      title: "Multiple LLM Providers",
      description:
        "Support for DeepSeek, GLM, Kimi, OpenAI, Claude, Gemini, and OpenAI-compatible gateways. Mix and match providers.",
    },
    {
      title: "Usage Tracking",
      description:
        "Track API usage, balances, token consumption, and plan status with customizable JavaScript extractor templates.",
    },
    {
      title: "Flexible Configuration",
      description:
        "Custom Base URL, API Key management, model fetching, endpoint testing, and per-provider activation settings.",
    },
    {
      title: "Lightweight & Fast",
      description:
        "Built with Electron and Vue 3 for a snappy, responsive experience. Minimal footprint, maximum productivity.",
    },
  ],
  providerCarousel: {
    chinese: "Chinese Providers",
    international: "International Providers",
    gateways: "Compatible Gateways",
  },
  features: {
    titlePre: "All",
    titleAccent: "Features",
    subtitle:
      "TransLite combines the best of local and cloud translation technology in a clean, lightweight desktop application.",
    diffTitle: "What Makes TransLite Different",
    diffSubtitle:
      "Designed for developers, writers, and anyone who needs fast, reliable translation.",
    shortcut: {
      title: "Global Shortcut Quick-Open",
      desc: "Use a global hotkey to summon the translation window from any application. No more alt-tabbing or searching for the app — just press the shortcut and translate instantly.",
      windowOpens: "Translation window opens instantly",
      configurable: "Shortcut:",
    },
    localModel: {
      title: "Local Model Translation",
      desc: "Run translation models entirely offline using ONNX Runtime. No data leaves your machine — perfect for privacy-sensitive work.",
      defaultModel: "Default model:",
      customDirs: "Support for custom model directories",
      downloadMgmt: "Model download management built in",
    },
    multiProvider: {
      title: "Multi-Provider Architecture",
      desc: "Seamlessly switch between different LLM providers. Each provider has independent Base URL, API Key, model selection, and activation settings.",
    },
    usage: {
      title: "Usage & Cost Tracking",
      desc: "Monitor API usage with customizable JavaScript request and extractor templates. Track balances, Token Plan, and per-request token consumption.",
      bullets: [
        "Balance & plan status monitoring",
        "API availability & endpoint testing",
        "Per-request token usage display",
        "Extensible with custom JS extractor templates",
      ],
    },
    supportedTitle: "Supported Providers",
    supportedSubtitle:
      "Presets for major Chinese and international LLM platforms.",
  },
  download: {
    titlePre: "Download",
    titleAccent: "TransLite",
    subtitle: "Free and open source. Available for Windows and macOS.",
    downloadFor: (platform: string) => `Download for ${platform}`,
    platformNotes: {
      windows: "Installer (NSIS)",
      macos: "DMG",
    },
    noticeStrong: "Note:",
    noticeText:
      " TransLite is in active development (v0.1.0). Download links will be available once the first release is published. For now, you can build from source on GitHub.",
    buildTitle: "Build from Source",
    buildDesc: "Clone the repository and build TransLite yourself:",
    releaseNotesTitle: "Release Notes",
    releaseDate: "June 2025",
    releaseHighlights: [
      "Initial public release",
      "Local model translation with ONNX Runtime",
      "DeepSeek, GLM, Kimi, OpenAI, Claude, Gemini provider support",
      "Global shortcut (Ctrl+Shift+T / Command+Shift+T)",
      "Usage tracking with JS extractor templates",
    ],
  },
  docs: {
    titleAccent: "Documentation",
    subtitle: "Everything you need to get started with TransLite.",
    onThisPage: "On this page",
    sidebar: [
      { id: "quick-start", label: "Quick Start" },
      { id: "installation", label: "Installation" },
      { id: "configuration", label: "Configuration" },
      { id: "providers", label: "Providers" },
      { id: "local-models", label: "Local Models" },
      { id: "shortcuts", label: "Shortcuts" },
      { id: "usage-tracking", label: "Usage Tracking" },
      { id: "faq", label: "FAQ" },
    ],
    quickStart: {
      title: "Quick Start",
      intro:
        "TransLite is a lightweight desktop translation app. Follow these steps to get up and running in minutes.",
      prereqTitle: "Prerequisites",
      prereqs: [
        "Node.js 18+ and npm",
        "Operating system: Windows 10+ or macOS 12+",
        "For local translation: ~4GB free disk space for model download",
      ],
    },
    installation: {
      title: "Installation",
      binaryTitle: "Download Prebuilt Binary",
      binaryTextPre: "Download the latest release for your platform from the ",
      binaryLink: "Download page",
      binaryTextPost: ".",
      sourceTitle: "Build from Source",
      devTitle: "Development Mode",
      devTextPre:
        "This starts the Vite dev server for frontend hot-reload. Run ",
      devTextPost:
        " in another terminal to launch the Electron app pointing at the dev server.",
    },
    configuration: {
      title: "Configuration",
      introPre: "TransLite stores all settings locally in a JSON file at ",
      introPost:
        ". No backend or database required — your data stays on your machine.",
      overviewTitle: "Settings Overview",
      items: [
        "Provider configurations (Base URL, API Key, model selection)",
        "Local model directory and model loading settings",
        "Global shortcut key binding",
        "Usage check templates (JavaScript request/extractor)",
        "Theme and display preferences",
      ],
    },
    providers: {
      title: "Provider Setup",
      intro:
        "TransLite comes with presets for major LLM providers. Each provider can be independently configured.",
      addingTitle: "Adding a Provider",
      addingSteps: [
        "Open TransLite and navigate to Settings",
        "Select a provider from the preset list",
        "Enter your API Key and Base URL (if needed)",
        "Click “Fetch Models” to load available models",
        "Select a model and activate the provider",
      ],
      featuresTitle: "Provider Features",
      featureItems: [
        {
          strong: "Endpoint Testing",
          text: " — Verify your API endpoint before using it",
        },
        {
          strong: "Model Fetching",
          text: " — Automatically retrieve available models from the provider",
        },
        {
          strong: "Per-Provider Activation",
          text: " — Enable or disable providers independently",
        },
      ],
      gatewaysTitle: "OpenAI-Compatible Gateways",
      gatewaysText:
        "TransLite supports any OpenAI-compatible API gateway. Simply enter your custom Base URL and API Key, and the app will work with any provider that implements the OpenAI API format.",
    },
    localModels: {
      title: "Local Models",
      intro:
        "TransLite uses ONNX Runtime for local model inference, enabling fully offline translation.",
      defaultTitle: "Default Model",
      defaultTextPre: "The default local model is ",
      defaultTextPost:
        ", which provides fast and accurate translation without an internet connection.",
      privacyStrong: "Privacy:",
      privacyText:
        " Local model inference means your text never leaves your computer. All processing happens on-device.",
      customTitle: "Custom Models",
      customText:
        "You can use custom model directories. Download compatible ONNX models and point TransLite to your model folder in the settings. The app handles model loading and management automatically.",
    },
    shortcuts: {
      title: "Keyboard Shortcuts",
      quickOpen: "Quick-open translation window",
      closeWindow: "Close window",
      moreSoon: "(More shortcuts coming soon)",
      inDevelopment: "In development",
      note: "Press the shortcut from any application to open the translation window.",
    },
    usageTracking: {
      title: "Usage Tracking",
      intro:
        "TransLite provides a flexible usage tracking system using JavaScript templates. You can create custom request and extractor scripts to monitor API consumption for any provider.",
      howTitle: "How It Works",
      items: [
        {
          strong: "Request Template",
          text: " — Define how to query the provider's usage API",
        },
        {
          strong: "Extractor Template",
          text: " — Parse the API response to extract balance, token usage, and plan status",
        },
        {
          strong: "",
          text: "Usage is displayed in-app: balances, Token Plan, API availability, and per-request token counts",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Is TransLite free?",
          a: "Yes! TransLite is open source under the MIT License. It's completely free to use and modify.",
        },
        {
          q: "Do I need an internet connection?",
          a: "No. TransLite supports fully offline translation using local ONNX models. Online LLM providers are optional.",
        },
        {
          q: "How do I get an API key for providers?",
          a: "Each provider has its own registration process. Visit the provider's website to sign up and get your API key.",
        },
        {
          q: "Can I use my own local model?",
          a: "Yes, you can configure a custom model directory in settings. The model must be in ONNX format.",
        },
        {
          q: "Where are my settings stored?",
          a: "Settings are stored locally at Electron's userData/settings.json. No data is sent to any server.",
        },
        {
          q: "Which platforms are supported?",
          a: "Windows 10+ and macOS 12+.",
        },
      ],
    },
  },
  contact: {
    methodsTitle: "Contact Methods",
    methodsSubtitle: "Pick whichever channel works best for you.",
    illustrationTitle: "Let's Connect",
    illustrationDesc:
      "Translation builds bridges. So does a friendly hello.",
    email: {
      title: "Email",
      desc: "For collaboration, feedback, or anything else.",
      action: "Copy Email",
      copied: "Copied!",
    },
    github: {
      title: "GitHub",
      desc: "Issues, pull requests, and source code.",
      action: "Visit GitHub",
    },
    qq: {
      title: "QQ Group",
      desc: "Join our QQ group chat for discussions and updates.",
      number: "769725403",
      numberLabel: "Group No.",
      action: "View QR Code",
      hint: "Scan with QQ to join · Group No. 769725403",
    },
    responseTitle: "Response Time",
    responseDesc:
      "I usually reply within 1–2 business days. For urgent matters, please open a GitHub issue.",
  },
  footer: {
    brandDesc:
      "A lightweight desktop translator with local-trans model translation, online LLM providers, and global shortcut launch.",
    product: "Product",
    resources: "Resources",
    features: "Features",
    download: "Download",
    docs: "Docs",
    github: "GitHub",
    issues: "Issues",
    changelog: "Changelog",
    openSource: "Open Source",
    mitLicense: "MIT License",
    copyrightSuffix: "TransLite. Open source under MIT License.",
  },
};

export type Dict = typeof en;

const zh: Dict = {
  nav: {
    home: "首页",
    features: "功能",
    download: "下载",
    docs: "文档",
    contact: "联系我",
    downloadCta: "下载",
  },
  home: {
    badge: "v0.1.0 — 开源桌面翻译器",
    heroTitle: "随时随地，",
    heroTitleAccent: "翻译一切",
    heroDesc:
      "TransLite 是一款轻量级桌面翻译应用，将本地离线模型与强大的在线 LLM 服务商相结合。通过全局快捷键即可在各服务商之间瞬间切换。",
    downloadForWindows: "下载 Windows 版",
    learnMore: "了解更多",
    seeInActionTitle: "实际效果",
    seeInActionSubtitle: "简洁直观的界面，为高效翻译工作流而设计。",
    workspaceTitle: "翻译工作区",
    workspaceDesc: "快速的左右对照翻译界面",
    settingsTitle: "服务商设置",
    settingsDesc: "管理 LLM 服务商与 API 密钥",
    featuresTitle: "强大功能",
    featuresSubtitle: "流畅、高质量翻译所需的一切。",
    viewAllFeatures: "查看全部功能",
    providersTitle: "多服务商支持",
    providersSubtitle: "丰富的本地与云端翻译引擎任你选择。",
    ctaTitle: "准备好开始了吗？",
    ctaDesc: "立即下载 TransLite，在桌面上体验快速、注重隐私的翻译。",
    downloadNow: "立即下载",
    readDocs: "阅读文档",
  },
  featureGrid: [
    {
      title: "全局快捷键",
      description:
        "通过全局快捷键随时唤起翻译窗口，无需切换上下文。",
    },
    {
      title: "本地模型翻译",
      description:
        "基于 ONNX 的本地模型实现完全离线翻译。无需联网，数据不离开你的设备。",
    },
    {
      title: "多 LLM 服务商",
      description:
        "支持 DeepSeek、GLM、Kimi、OpenAI、Claude、Gemini 及 OpenAI 兼容网关，可自由组合使用。",
    },
    {
      title: "用量统计",
      description:
        "通过可自定义的 JavaScript 提取器模板，跟踪 API 用量、余额、Token 消耗与套餐状态。",
    },
    {
      title: "灵活配置",
      description:
        "自定义 Base URL、API Key 管理、模型获取、接口测试，以及按服务商独立启用设置。",
    },
    {
      title: "轻量快速",
      description:
        "基于 Electron 与 Vue 3 构建，体验敏捷流畅。占用极小，效率最大化。",
    },
  ],
  providerCarousel: {
    chinese: "国内服务商",
    international: "国际服务商",
    gateways: "兼容网关",
  },
  features: {
    titlePre: "全部",
    titleAccent: "功能",
    subtitle:
      "TransLite 在简洁轻量的桌面应用中，融合了本地与云端翻译技术的精华。",
    diffTitle: "TransLite 的与众不同之处",
    diffSubtitle: "为开发者、写作者以及所有需要快速可靠翻译的人而设计。",
    shortcut: {
      title: "全局快捷键唤起",
      desc: "通过全局快捷键，在任何应用中召唤翻译窗口。无需 Alt-Tab 或寻找应用——按下快捷键即可立即翻译。",
      windowOpens: "翻译窗口立即打开",
      configurable: "快捷键：",
    },
    localModel: {
      title: "本地模型翻译",
      desc: "使用 ONNX Runtime 完全离线运行翻译模型。数据不离开你的设备——非常适合隐私敏感的工作。",
      defaultModel: "默认模型：",
      customDirs: "支持自定义模型目录",
      downloadMgmt: "内置模型下载管理",
    },
    multiProvider: {
      title: "多服务商架构",
      desc: "在不同 LLM 服务商之间无缝切换。每个服务商拥有独立的 Base URL、API Key、模型选择与启用设置。",
    },
    usage: {
      title: "用量与成本统计",
      desc: "通过可自定义的 JavaScript 请求与提取器模板监控 API 用量。跟踪余额、Token 套餐与每次请求的 Token 消耗。",
      bullets: [
        "余额与套餐状态监控",
        "API 可用性与接口测试",
        "每次请求的 Token 用量展示",
        "可通过自定义 JS 提取器模板扩展",
      ],
    },
    supportedTitle: "支持的服务商",
    supportedSubtitle: "预置主流国内外 LLM 平台。",
  },
  download: {
    titlePre: "下载",
    titleAccent: "TransLite",
    subtitle: "免费开源。支持 Windows 与 macOS。",
    downloadFor: (platform: string) => `下载 ${platform} 版`,
    platformNotes: {
      windows: "安装包 (NSIS)",
      macos: "DMG 镜像",
    },
    noticeStrong: "注意：",
    noticeText:
      "TransLite 正在积极开发中 (v0.1.0)。首个正式版发布后将提供下载链接。目前可在 GitHub 上从源码构建。",
    buildTitle: "从源码构建",
    buildDesc: "克隆仓库并自行构建 TransLite：",
    releaseNotesTitle: "版本说明",
    releaseDate: "2025 年 6 月",
    releaseHighlights: [
      "首个公开版本",
      "基于 ONNX Runtime 的本地模型翻译",
      "支持 DeepSeek、GLM、Kimi、OpenAI、Claude、Gemini 服务商",
      "全局快捷键 (Ctrl+Shift+T / Command+Shift+T)",
      "基于 JS 提取器模板的用量统计",
    ],
  },
  docs: {
    titleAccent: "文档",
    subtitle: "开始使用 TransLite 所需的一切。",
    onThisPage: "本页目录",
    sidebar: [
      { id: "quick-start", label: "快速开始" },
      { id: "installation", label: "安装" },
      { id: "configuration", label: "配置" },
      { id: "providers", label: "服务商" },
      { id: "local-models", label: "本地模型" },
      { id: "shortcuts", label: "快捷键" },
      { id: "usage-tracking", label: "用量统计" },
      { id: "faq", label: "常见问题" },
    ],
    quickStart: {
      title: "快速开始",
      intro:
        "TransLite 是一款轻量级桌面翻译应用。按照以下步骤，几分钟内即可上手。",
      prereqTitle: "前置条件",
      prereqs: [
        "Node.js 18+ 和 npm",
        "操作系统：Windows 10+ 或 macOS 12+",
        "本地翻译需约 4GB 可用磁盘空间用于下载模型",
      ],
    },
    installation: {
      title: "安装",
      binaryTitle: "下载预构建版本",
      binaryTextPre: "从",
      binaryLink: "下载页面",
      binaryTextPost: "获取适用于你平台的最新版本。",
      sourceTitle: "从源码构建",
      devTitle: "开发模式",
      devTextPre: "这会启动 Vite 开发服务器以支持前端热更新。在另一个终端运行 ",
      devTextPost: " 以启动指向开发服务器的 Electron 应用。",
    },
    configuration: {
      title: "配置",
      introPre: "TransLite 将所有设置保存在本地 JSON 文件 ",
      introPost: " 中。无需后端或数据库——数据保留在你的设备上。",
      overviewTitle: "设置概览",
      items: [
        "服务商配置（Base URL、API Key、模型选择）",
        "本地模型目录与模型加载设置",
        "全局快捷键绑定",
        "用量查询模板（JavaScript 请求/提取器）",
        "主题与显示偏好",
      ],
    },
    providers: {
      title: "服务商设置",
      intro: "TransLite 预置了主流 LLM 服务商，每个服务商均可独立配置。",
      addingTitle: "添加服务商",
      addingSteps: [
        "打开 TransLite 并进入设置",
        "从预设列表中选择服务商",
        "输入 API Key 和 Base URL（如需要）",
        "点击「获取模型」加载可用模型",
        "选择模型并启用该服务商",
      ],
      featuresTitle: "服务商功能",
      featureItems: [
        { strong: "接口测试", text: " —— 使用前验证你的 API 接口" },
        { strong: "模型获取", text: " —— 自动从服务商获取可用模型列表" },
        { strong: "独立启用", text: " —— 按服务商单独启用或停用" },
      ],
      gatewaysTitle: "OpenAI 兼容网关",
      gatewaysText:
        "TransLite 支持任何 OpenAI 兼容的 API 网关。只需填入自定义 Base URL 和 API Key，即可与任何实现 OpenAI API 格式的服务商配合使用。",
    },
    localModels: {
      title: "本地模型",
      intro:
        "TransLite 使用 ONNX Runtime 进行本地模型推理，实现完全离线翻译。",
      defaultTitle: "默认模型",
      defaultTextPre: "默认本地模型为 ",
      defaultTextPost: "，无需联网即可提供快速准确的翻译。",
      privacyStrong: "隐私：",
      privacyText:
        "本地模型推理意味着你的文本永远不会离开你的电脑，所有处理都在设备上完成。",
      customTitle: "自定义模型",
      customText:
        "你可以使用自定义模型目录。下载兼容的 ONNX 模型，并在设置中将 TransLite 指向你的模型文件夹，应用会自动处理模型加载与管理。",
    },
    shortcuts: {
      title: "键盘快捷键",
      quickOpen: "快速打开翻译窗口",
      closeWindow: "关闭窗口",
      moreSoon: "（更多快捷键即将推出）",
      inDevelopment: "开发中",
      note: "在任何应用中按下快捷键即可唤起翻译窗口。",
    },
    usageTracking: {
      title: "用量统计",
      intro:
        "TransLite 提供基于 JavaScript 模板的灵活用量统计系统。你可以创建自定义的请求和提取器脚本，为任何服务商监控 API 消耗。",
      howTitle: "工作原理",
      items: [
        { strong: "请求模板", text: " —— 定义如何查询服务商的用量 API" },
        {
          strong: "提取器模板",
          text: " —— 解析 API 响应，提取余额、Token 用量与套餐状态",
        },
        {
          strong: "",
          text: "用量在应用内展示：余额、Token 套餐、API 可用性以及每次请求的 Token 数",
        },
      ],
    },
    faq: {
      title: "常见问题",
      items: [
        {
          q: "TransLite 是免费的吗？",
          a: "是的！TransLite 基于 MIT 许可证开源，完全免费使用和修改。",
        },
        {
          q: "需要联网吗？",
          a: "不需要。TransLite 支持使用本地 ONNX 模型完全离线翻译，在线 LLM 服务商是可选的。",
        },
        {
          q: "如何获取服务商的 API Key？",
          a: "每个服务商都有自己的注册流程，请访问服务商官网注册并获取 API Key。",
        },
        {
          q: "可以使用自己的本地模型吗？",
          a: "可以，你可以在设置中配置自定义模型目录，模型须为 ONNX 格式。",
        },
        {
          q: "我的设置保存在哪里？",
          a: "设置保存在本地 Electron 的 userData/settings.json 中，不会向任何服务器发送数据。",
        },
        {
          q: "支持哪些平台？",
          a: "Windows 10+ 和 macOS 12+。",
        },
      ],
    },
  },
  contact: {
    methodsTitle: "联系方式",
    methodsSubtitle: "选择你最方便的渠道与我联系。",
    illustrationTitle: "保持联系",
    illustrationDesc: "翻译连接世界，一句问候也是。",
    email: {
      title: "邮箱",
      desc: "适合合作、反馈或其他事宜。",
      action: "复制邮箱",
      copied: "已复制",
    },
    github: {
      title: "GitHub",
      desc: "提交 Issue、Pull Request 或查看源码。",
      action: "前往 GitHub",
    },
    qq: {
      title: "QQ 交流群",
      desc: "加入 QQ 群交流讨论与获取最新动态。",
      number: "769725403",
      numberLabel: "群号",
      action: "查看二维码",
      hint: "QQ 扫码加入 · 群号 769725403",
    },
    responseTitle: "回复时间",
    responseDesc:
      "我通常会在 1–2 个工作日内回复。如有紧急事宜，建议提交 GitHub Issue。",
  },
  footer: {
    brandDesc:
      "一款轻量级桌面翻译器，支持本地模型翻译、在线 LLM 服务商与全局快捷键唤起。",
    product: "产品",
    resources: "资源",
    features: "功能",
    download: "下载",
    docs: "文档",
    github: "GitHub",
    issues: "问题反馈",
    changelog: "更新日志",
    openSource: "开源",
    mitLicense: "MIT 许可证",
    copyrightSuffix: "TransLite，基于 MIT 许可证开源。",
  },
};

export const translations: Record<Language, Dict> = { en, zh };
