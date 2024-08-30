export default {

  features: {
    textGeneration: 'Text Generation',
    textGenerationDescription: 'Generate textual content using AI algorithms.',
    imageGeneration: 'Image Generation',
    imageGenerationDescription: 'Create images using AI-based algorithms.',
    aiChat: 'AI Chat',
    aiChatDescription: 'Engage in conversations with AI-powered chatbots.',
    freeAndNoAds: 'Free and No Ads',
    freeAndNoAdsDescription: 'Enjoy our services without any cost or advertisements.',
  },
  
  app: {
    start: 'Start',
    getStart: 'Get started',
    descApp: "Your free gateway to the best artificial intelligence models humanity has ever produced.",
    copyWrite:  "© " + new Date().getFullYear() + " Rand AI. All rights reserved",
    termsOfUse: "Terms of use",
    privacyPolicy: "Privacy policy",
    company:'Company',
    aboutUs:'About us',
    contact:'Contact',
    followUs:'Follow Us'
  },

  common: {
    you:'You',
    nameApp: 'Rand AI',
    errorSomeThing: 'Something went wrong',
    add: 'Add',
    addSuccess: 'Add Success',
    addFailed: 'Add Failed',
    edit: 'Edit',
    editSuccess: 'Edit Success',
    updateSuccess: 'update Success',
    updateFailed: 'update Failed',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    deleteFailed: 'update Failed',
    save: 'Save',
    saveSuccess: 'Save Success',
    reset: 'Reset',
    action: 'Action',
    export: 'Export',
    exportSuccess: 'Export Success',
    import: 'Import',
    importSuccess: 'Import Success',
    clear: 'Clear',
    clearSuccess: 'Clear Success',
    yes: 'Yes',
    no: 'No',
    confirm: 'Confirm',
    download: 'Download',
    noData: 'No Data',
    wrong: 'Something went wrong, please try again later.',
    success: 'Success',
    failed: 'Failed',
    verify: 'Verify',
    unauthorizedTips: 'Unauthorized, please verify first.',
    stopResponding: 'Stop Responding',
    tryAgain:'Try again',
    loadMore:'load More',

  },
  chat: {
    newChatButton: 'New Chat',
    placeholder: 'Ask me anything...(Shift + Enter = line break, "/" to trigger prompts)',
    placeholderMobile: 'Ask me anything...',
    copy: 'Copy',
    copied: 'Copied',
    copyCode: 'Copy Code',
    clearChat: 'Clear Chat',
    copySuccess: 'Copy completed successfully',
    copyFailed: 'Copy failed',
    clearChatConfirm: 'Are you sure to clear this chat?',
    exportImage: 'Export Image',
    exportImageConfirm: 'Are you sure to export this chat to png?',
    exportSuccess: 'Export Success',
    exportFailed: 'Export Failed',
    usingContext: 'Context Mode',
    turnOnContext: 'In the current mode, sending messages will carry previous chat records.',
    turnOffContext: 'In the current mode, sending messages will not carry previous chat records.',
    deleteMessage: 'Delete Message',
    deleteMessageConfirm: 'Are you sure to delete this message?',
    deleteHistoryConfirm: 'Are you sure to clear this history?',
    clearHistoryConfirm: 'Are you sure to clear chat history?',
    preview: 'Preview',
    showRawText: 'Show as raw text',
    underChat: 'Rand AI  is still under development',
    convertTo: 'Export To',
    convertToDocx: 'Word Document',
    convertToPPTX: 'PowerPoint',
    convertToPDF: 'PDF',
    convertToPNG: 'Image',
    conversionInProgress: 'Process Confirmation',
    conversionInProgressMessage: 'Do you want to start the conversion process?',

    deleteConfirmation: 'Delete Confirmation',
    deleteConfirmationMessage: 'Are you sure you want to delete?',
    clearAllChats: 'Clear all chats',
    getMessageSoon:'You will get the full answer in a few moments',

    includeWebSearch:'Web Search',

    chatText:'Text Chat',
    chatImage:'Image Chat',
    pin:'Pin',
    unPin:'un Pin',

    deleteAllChatsTextAndImage:'Delete All Chats (Text and Image)',
    deleteAllChatsText:'Delete All Chats Text',
    deleteAllChatsImage:'Delete All Chats Image',

    today: 'Today',
    yesterday: 'Yesterday',
    previous7Days: 'Previous 7 Days',
    pinned:'Pinned',
    textChat:"Chat Text",
    imageChat:"Chat Image",
    research:"Researchs",

    
    chatTypeImage: 'Create Images',
    chatTypeText: 'Text Chat',
    chatTypeResearch: 'Academic Research'

  },
  setting: {
    setting: 'Setting',
    general: 'General',
    advanced: 'Advanced',
    config: 'Config',
    avatarLink: 'Avatar Link',
    name: 'Name',
    description: 'Description',
    role: 'Role',
    temperature: 'Temperature',
    top_p: 'Top_p',
    resetUserInfo: 'Reset UserInfo',
    chatHistory: 'ChatHistory',
    theme: 'Theme',
    language: 'Language',
    api: 'API',
    reverseProxy: 'Reverse Proxy',
    timeout: 'Timeout',
    socks: 'Socks',
    httpsProxy: 'HTTPS Proxy',
    balance: 'API Balance',
    monthlyUsage: 'Monthly Usage',
    profile: "Profile",
    select: 'Select Role',

    isEmojes:'Include emojis in response',


  },
  store: {
    siderButton: 'Prompt Store',
    local: 'Local',
    online: 'Online',
    title: 'Title',
    description: 'Description',
    clearStoreConfirm: 'Whether to clear the data?',
    importPlaceholder: 'Please paste the JSON data here',
    addRepeatTitleTips: 'Title duplicate, please re-enter',
    addRepeatContentTips: 'Content duplicate: {msg}, please re-enter',
    editRepeatTitleTips: 'Title conflict, please revise',
    editRepeatContentTips: 'Content conflict {msg} , please re-modify',
    importError: 'Key value mismatch',
    importRepeatTitle: 'Title repeatedly skipped: {msg}',
    importRepeatContent: 'Content is repeatedly skipped: {msg}',
    onlineImportWarning: 'Note: Please check the JSON file source!',
    downloadError: 'Please check the network status and JSON file validity',
  },
  auth: {

    name: 'Name',
    email: 'Email',
    password: 'Password',
    login: 'Login',
    loginIn: 'Login In',
    fillAllField: 'fill All Field',
    emailRequired: 'Email Required',
    passwordRequired: 'Password Required',
    signInFailed: 'signIn Failed',
    passwordLengthError: 'password Length Error',
    invalidEmailFormat: 'invalid Email Format',
    goForgetPass: 'Forgot your password?',
    goSignUp: "Don't have an account?",
    signUp: "Sign up",
    goLogin: "Already have an account?",
    nameRequired: "Name Required",
    ReenterPassword: "Re-enter Password",
    logOut: "Log Out",
    logOutFailed: "Log Out Failed",
    previous:"Previous",
    or:'OR',

    createAccount:'Create your account',
    signUpGoogle: 'Continue With Google',
    signUpFacebook: 'Continue With Facebook',
    signUpGmail: 'Continue With Gmail',
    firstName: 'First Name',
    lastName: 'Last Name',
    next:'Next',
    verfiy:'Verfiy',
    checkOTP:'Check Message in your Email',
    emailVerification:'Email Verification',
    sendedCode:'We have send a code to your email',
    dontRecieveCode:"Didn't recieve code?",
    reSendCode:'Resend',
  
   
  },
  research: {
    dashboard: 'Dashboard',
    majors: 'Majors',
    departments: 'Departments',
    courses: 'Courses',
    actions: 'Actions',
    students: 'Students',
    researches: 'Researches',
    profile: 'Profile',
    settings: 'Settings',
    advances: 'Advances',






  },
  re: {
    re: 'Research',
    
    introduction: 'Introduction:',
    methodology: 'Methodology',
    discussion: 'Discussion',
    summary: 'Summary',
    result: 'Result',
    future_work: 'Future Work',
    conclusion: 'Conclusion',
    references: 'References',


    research: 'Researches List',
    addResearch: 'Add Research',
    docOptions: 'Doucement Options',
    border: 'Page Border',
    isCover: 'Add Cover',
    isPageNumber: 'Show Page Number',
    isIndex: 'Add Index',
    coverOptions: 'Cover Options',
    isName: 'Name Student',
    isTitle: 'Title',
    isDoctorName: 'is Add Doctor Name',
    isImage: 'Add Image in cover',
    isYears: 'Show Current Years',
    isHeader: 'Add Header',
    isFooter: 'Add Footer',

  },
  university: {
    university: 'University',
    universitys: 'Universitys',
    addUniversity: 'Add University',
    editUniversity: 'Update University',
    addUniversityTitle: 'Add University Title',
    checkEmailMessage: 'Check Message in your Email',
    nameRequired: 'Name is required',
    locationRequired: 'Location is required',
    countryRequired: 'Country is required',
    stateRequired: 'State is required',
    imageRequired: 'Image is required',
    universityName: 'University Name',
    location: 'Location',
    country: 'Country',
    state: 'State',
    image: 'Image',
    universityNameLabel: 'University Name',
    locationLabel: 'Location',
    countryLabel: 'Country',
    stateLabel: 'State',
    imageLabel: 'Image',
    universityNamePlaceholder: 'University Name',
    locationPlaceholder: 'Location',
    countryPlaceholder: 'Country',
    statePlaceholder: 'State',
    imagePlaceholder: 'Image URL',
    addUniversityButton: 'Add University',
  },


  privacyPolicy: {
    privacyPolicyHeader: 'Privacy Policy',
    content: {
      paragraph1:
        'This Privacy Policy is prepared by Rand AI and whose registered address is Yemen (“We”) are committed to protecting and preserving the privacy of our visitors when visiting our site or communicating electronically with us.',
      paragraph2:
        'This policy sets out how we process any personal data we collect from you or that you provide to us through our website and social media sites. We confirm that we will keep your information secure and comply fully with all applicable Yemen Data Protection legislation and regulations. Please read the following carefully to understand what happens to personal data that you choose to provide to us, or that we collect from you when you visit our sites. By submitting information you are accepting and consenting to the practices described in this policy.',
    },
    typesOfInformation: {
      title: 'Types of information we may collect from you',
      informationYouSupply: {
        title: 'Information you supply to us',
        content:
          'You may supply us with information about you by filling in forms on our website or social media. This includes information you provide when you submit a contact/inquiry form. The information you give us may include but is not limited to, your name, address, e-mail address, and phone number.',
      },
    },
    howWeMayUse: {
      title: 'How we may use the information we collect',
      informationYouSupply: {
        title: 'Information you supply to us',
        content: 'We will use this information:',
        points: [
          'To provide you with information and/or services that you request from us;',
          'To contact you to provide the information requested.',
        ],
      },
    },
    disclosure: {
      title: 'Disclosure of your information',
      content:
        'Any information you provide to us will either be emailed directly to us or may be stored on a secure server. We do not rent, sell or share personal information about you with other people or non-affiliated companies. We will use all reasonable efforts to ensure that your personal data is not disclosed to regional/national institutions and authorities unless required by law or other regulations.',
    },
    securityNote:
      'Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.',
    yourRights: {
      title: 'Your rights – access to your personal data',
      content:
        'You have the right to ensure that your personal data is being processed lawfully (“Subject Access Right”). Your subject access right can be exercised in accordance with data protection laws and regulations. Any subject access request must be made in writing to [insert contact details]. We will provide your personal data to you within the statutory time frames. To enable us to trace any of your personal data that we may be holding, we may need to request further information from you. If you complain about how we have used your information, you have the right to complain to the Information Commissioner’s Office (ICO).',
    },
    changesToPrivacyPolicy: {
      title: 'Changes to our privacy policy',
      content:
        'Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy.',
    },
    contactInformation: {
      title: 'Contact',
      content:
        '<p>Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to <a href="mailto:mfoud444@gmail.com" class="text-blue-500">mohammed foud mfoud444@gmail.com</a>.</p>',
    },
  },



  termsOfUse: {
    introduction: {
      title: 'Introduction',
      paragraphs: [
        'The following terms are a legal agreement between RandAI ("RandAI" or "we" or "us") and you ("you") regarding the services provided to you through the website randai.web.app. Please read carefully the following terms and conditions before using our services. By clicking "I accept" when completing the registration process or using our services, YOU DECLARE YOUR ACCEPTANCE AND AGREE TO ALL TERMS AND CONDITIONS OF THIS AGREEMENT, and that you are authorized to act on behalf of the owner of this account. If you do not agree with them, you should not use our services.',
        'We reserve the right, at our sole discretion, to change, add, or delete portions of these Terms of Use at any time without further notice.',
      ],
    },

    services: {
      title: 'Services',
      paragraphs: [
        'You must fill in the registration form on page "Register" to use the services. You must provide truthful and accurate information about yourself as requested in the registration form. As part of the registration process, you must specify your email address and a password for your account. You are responsible for maintaining the security of your account, passwords, and for all the use of the account that belongs to you. RandAI reserves the right to refuse to register a user or cancel an account if appropriate.',
        'Part of the services we provide are free, while others are provided on a monthly (or annual) fee. The monthly fee paid by you to us will vary depending on the services that you ask us to provide to you. You can ask us and agree to upgrade or downgrade the services we provide, and the monthly fee will be amended accordingly.',
        'RandAI uses every effort to ensure that access to our services is available to you. You agree, however, that there may be times, scheduled and unscheduled, where services will be unavailable. We will notify you about the planned operations and the unavailability of the service. Despite all efforts, RandAI is not responsible for any loss of service which occurs as a result of or non-availability of the service.',
        'RandAI makes no guarantee that all the chat texts will be delivered without any problem to all visitors of your website because of the variety of browsers and their versions. Also in some, mainly old, browsers it is not possible to display the chat window or it may not be displayed correctly. In any case, we are not liable if the chat window is not displayed correctly or the installation of the chat windows on your website results in the incorrect display of the website. The user is responsible and should check that the website appears and functions without any problem after the installation of the service.',
        'RandAI employs the OpenAI API to create AI chatbots that enhance your live chat experience. These chatbots utilize state-of-the-art natural language processing (NLP) technology to understand and respond to written language in a manner similar to human conversation. However, it is important to note that AI chatbots, while advanced, are not infallible and may occasionally provide incorrect or inaccurate information. We encourage users to review their chat history for any potential inaccuracies and take appropriate measures to address them, such as creating a new question-answer (QA) pair that provides a more accurate response.',
        'Please be aware that RandAI is not responsible for any incorrect or inaccurate information provided by the AI chatbots, nor for any consequences that may arise from such information. Users are solely responsible for verifying the accuracy of any information received from the chatbots and for taking appropriate actions based on that information. We urge users to exercise caution and discretion when relying on information provided by the AI chatbots.',
      ],
    },
    limitationsAndRestrictions: {
      title: 'LIMITATIONS AND RESTRICTIONS',
      paragraphs: [
        'You agree not to use the services for any use or purpose that:',
        'Breach any applicable local, state or federal laws',
        'Is defamatory, blasphemous, pornographic, incites hatred, crime, terrorism or any other offense',
        'Is misleading, for example, you present yourself like you\'re someone else',
        'For any use that violates the intellectual property rights of others',
        'You are not permitted to use our AI chatbot for the following purposes:',
        'Illegal activities or any actions that exploit or harm children',
        'Generating hateful, harassing, or violent content that targets individuals or groups based on their identity, or that promotes violence',
        'Creating malware or code designed to disrupt or damage computer systems',
        'Activities that carry a high risk of physical harm, including weapons development or management of critical infrastructure',
        'Generating content that promotes self-harm, eating disorders, or acts of violence',
        'Activities that carry a high risk of economic harm, such as multi-level marketing, or making automated eligibility determinations for credit, or public assistance',
        'Fraudulent or deceptive activities, including scams, fake reviews or disinformation',
        'Producing adult content including content meant to arouse sexual excitement (excluding sex education and wellness)',
        'Political campaigning or lobbying, including generating campaign materials or building products for political purposes',
        'Violating people\'s privacy, including tracking individuals without consent or unlawfully collecting or disclosing personal information',
        'Engaging in the unauthorized practice of law, providing tailored legal or financial advice without qualified review, or offering medical diagnoses or treatment instructions',
        'Please note that our AI chatbot is not designed to provide legal, financial, or medical advice, and should not be used for these purposes. We urge users to exercise caution and ensure that their use of our AI chatbot complies with all applicable laws and regulations.',
        'We have every right to revise the policies of using the service, including the maximum number of conversations that a user can have per month (free package) and maximum days the dialogs are saved. Also, the prices of the packages may change at any time. The prices listed on the relevant webpage of the website are always applicable, and customers who pay for our services will be notified in time for the price change by email.',
        'By subscribing to a paid plan (by credit card or PayPal account): (i) you declare that you are authorized to use this account / card. (ii) you give authorization to RandAI to debit the account / card for all charges associated with your account on a monthly, half-year, or annual fee until you cancel your subscription.',
        'The corresponding costs will be charged even if your account is active but not in use. If you want to stop being charged, you are responsible for canceling your subscription before the next defined payment. If you cancel your subscription, you will be on your paid plan up to the date you have paid for. After that, you will be degraded to the free plan.',
        'Unauthorized use of services and / or reselling the services without the prior written consent of RandAI is expressly prohibited.',
      ],
    },
    refundPolicy: {
      title: 'REFUND POLICY',
      paragraphs: [
        'We encourage our users to try our service for free before they pay for a plan. However you can easily cancel your subscription at any time from the operator console. There are no cancellation fees, though no refunds are provided for prorated periods. If you cancel your subscription, your plan will be active up to the date you have paid for. After that you will degraded to the free plan.',
      ],
    },
    thirdParties: {
      title: 'THIRD PARTIES',
      paragraphs: [
        'If you use RandAI account of a Third Party or a third party uses the service through your account, you declare and guarantee that (i) you are authorized to act on behalf of the third party and that third party is bound by this agreement and (ii) you will not give or share customer information with third parties.',
      ],
    },
    proprietaryRights: {
      title: 'PROPRIETARY RIGHTS',
      paragraphs: [
        'This agreement is relating to the services provided by RandAI and you are not given any permission for any software. You may not in any way, directly or indirectly: reverse engineering, disassemble or attempt to discover the source code, algorithms, or data related to the services of RandAI. You should not remove or modify any information of the services, and to create derivative work based on RandAI. The services that you can access from your account should be used exclusively by your business and you have not the right to share or resell the services in any way in favor of third parties.',
        'The RandAI, RandAI.com and associated logos, trademarks, product names and trade names associated with RandAI are owned by RandAI. You cannot use any of our labels, or product names without our express written consent.',
     
      ],
    },
 
  },

  tel:{
    keywords:'keywords',
    addKeyWords:'Add KeyWords',
    keyword:'keyword',
    editKeyWords:'Edit KeyWords',
    groups:'Groups',
    phoneNumber:'Phone Number',
    next:'Next',
    confirmCode:'Confirm Code',
    code:'Code',
    blockkeywords:'Block Key Words',
    addBlockkeywords:'Add block keywords',
    blockkeyword:'block keyword',
    editKeyBlockkeywords:'Edit KeyWords',
  }
}
