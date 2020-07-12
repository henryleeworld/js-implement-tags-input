$('[name=tags]').tagify({
    delimiters: ",",
    pattern: null,
    maxTags: Infinity,
    callbacks: {},
    addTagOnBlur: true,
    duplicates: false,
    whitelist: [],
    blacklist: [],
    enforceWhitelist: false,
    autoComplete: true,
});