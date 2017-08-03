//
///Startup///
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.laterrun.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
// Startup page
user_pref("browser.startup.page", 3);


///Geolocation///
// Location aware browsing
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("geo.wifi.logging.enabled", false); 
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoip.timeout", 1);
// GeoIP based search results
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
// Disable OS locale use app locale
user_pref("intl.locale.matchOS", false);
// Set app locale
user_pref("general.useragent.locale", "en-US");
// Disable geographically specific results/search engines
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("intl.accept_languages", "en-US, en");
// Enforce US English locale regardless of the system locale
user_pref("javascript.use_us_english_locale", true);
// Disable geolocation on non-secure origins
user_pref("geo.security.allowinsecure", false);


//Quiet fox//
// Disable auto-update checks for Firefox
user_pref("app.update.enabled", false);
// Disable auto-update checks for add-ons
user_pref("extensions.update.enabled", false);
//Disable auto update installing for Firefox
user_pref("app.update.auto", false);
// Disable auto update installing for add-ons
user_pref("extensions.update.autoUpdateDefault", false);
// Disable background update service
user_pref("app.update.service.enabled", false);
// Disable background update staging
user_pref("app.update.staging.enabled", false);
// Enforce update information is displayed
user_pref("app.update.silent", false);
// Disable add-on metadata updating
user_pref("extensions.getAddons.cache.enabled", false);
// Disable auto updating of personas
user_pref("lightweightThemes.update.enabled", false);
// Disable search update
user_pref("browser.search.update", false);
// Disable sending Flash crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// Disable sending the URL of the website where a plugin crashed
user_pref("dom.ipc.plugins.reportCrashURL", false);
// Disable extension discovery
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");
// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
// Disable health report
user_pref("datareporting.healthreport.uploadEnabled", false);
// Disable about:healthreport page
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
// Disable new data submission, master kill switch
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// Disable "Heartbeat"
user_pref("browser.selfsupport.enabled", false);
user_pref("browser.selfsupport.url", "");
// Disable crash reports ////
user_pref("breakpad.reportURL", "");
// Disable sending of crash reports
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
// Disable new tab tile ads & preload & marketing junk
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
// Disable "Snippets"
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
// Disable "social" integration
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.enabled", false);


//Blocklists, safebrowsing, and tracking protection.//
// Enable Firefox blocklist, but sanitize blocklist url
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");
// Enable Kinto blocklist updates
_user_pref("services.blocklist.update_enabled", true);
user_pref("services.blocklist.signing.enforced", true);
// Disable "Block dangerous and deceptive content"
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
// Disable "Block dangerous downloads"
user_pref("browser.safebrowsing.downloads.enabled", false);
// Disable "Warn me about unwanted and uncommon software" 
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
// Disable Google safebrowsing updates
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
// Disable binaries NOT in local lists being checked by Google
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
// Disable reporting URLs
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", ""); // (FF50+)
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", ""); // (FF54+)
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", ""); // (FF54+)
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", ""); // (FF54+)
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", ""); // (FF54+)
// Disable 'ignore this warning' on Safe Browsing warnings
user_pref("browser.safebrowsing.allowOverride", false);
// Disable Tracking Protection in all windows
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("privacy.trackingprotection.enabled", false);
// Enable more Tracking Protection choices
user_pref("privacy.trackingprotection.ui.enabled", false);
// Disable Mozilla's blocklist for known Flash tracking/fingerprinting
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
// Disable Mozilla's tracking protection and Flash blocklist updates
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");



//System add-ons and experiments.//
// Disable experiments
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
// Disable Mozilla permission to silently opt you into tests
user_pref("network.allow-experiments", false);
// Block URL used for system add-on updates
user_pref("extensions.systemAddon.update.url", "");
// Disable Pocket
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");
// Disable FlyWeb
user_pref("dom.flyweb.enabled", false);
// Disable Shield
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
// Disable Onboarding
user_pref("browser.onboarding.enabled", false);
// Disable Web Compatibility Reporter
user_pref("extensions.webcompat-reporter.enabled", false);


//Block implicit outbound.//
// Disable link user_prefetching
user_pref("network.user_prefetch-next", false);
// Disable DNS user_prefetching
user_pref("network.dns.disableuser_prefetch", true);
user_pref("network.dns.disableuser_prefetchFromHTTPS", true);
// Disable Seer/Necko
user_pref("network.predictor.enabled", false);
// Disable more Necko/Captive Portal
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
// Disable link-mouseover opening connection to linked server
user_pref("network.http.speculative-parallel-limit", 0);
// Disable pings (but enforce same host in case)
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
// Disable links launching Windows Store on Windows
user_pref("network.protocol-handler.external.ms-windows-store", false);
// Disable predictor / user_prefetching
user_pref("network.predictor.enable-user_prefetch", false);


//Location bar, search bar, forms, and history.//
// Disable location bar domain guessing
user_pref("browser.fixup.alternate.enabled", false);
// Display all parts of the url in the location bar
user_pref("browser.urlbar.trimURLs", false);
// Limit history leaks via enumeration (PER TAB: back/forward)
user_pref("browser.sessionhistory.max_entries", 10);
// Disable CSS querying page history - CSS history leak
user_pref("layout.css.visited_links_enabled", false);
// Disable displaying javascript in history URLs
user_pref("browser.urlbar.filter.javascript", true);
// Disable search bar LIVE search suggestions
user_pref("browser.search.suggest.enabled", false);
// Disable location bar LIVE search suggestions
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
// Disable location bar suggesting "preloaded" top websites
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
// Disable location bar making speculative connections
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// Disable location bar autocomplete
user_pref("browser.urlbar.autocomplete.enabled", false);
// Disable location bar autofill
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);
// Disable location bar one-off searches
user_pref("browser.urlbar.oneOffSearches", false);
// Disable search and form history
user_pref("browser.formfill.enable", false);
// Disable Windows jumplist
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
// Disable Windows taskbar preview
user_pref("browser.taskbar.previews.enable", false);


//Passwords.///
// Disable auto-filling username & password form fields
user_pref("signon.autofillForms", false);
// Disable websites forcing autcomplete
user_pref("signon.storeWhenAutocompleteOff", true);
// Display warnings for logins on non-secure (non HTTPS) pages
user_pref("security.insecure_password.ui.enabled", true);
// Remove user & password info when attempting to fix an entered URL
user_pref("browser.fixup.hide_user_pass", true);
// Disable formless login capture for Password Manager
user_pref("signon.formlessCapture.enabled", false);
// Disable autofilling saved passwords on HTTP pages and show warning
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);


//Cache.///
// Disable disk cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
// Disable disk cache for SSL pages
user_pref("browser.cache.disk_cache_ssl", false);
// Disable offline cache
user_pref("browser.cache.offline.enable", false);
// Disable randomized FF HTTP cache decay experiments
user_pref("browser.cache.frecency_experiment", -1);
// Set DNS cache and expiration time (default 400 and 60, same as TBB)
user_pref("network.dnsCacheEntries", 400);
user_pref("network.dnsCacheExpiration", 60);

//Sessions and session restore.//
// Disable storing extra session data
user_pref("browser.sessionstore.privacy_level", 2);
// Set the minimum interval between session save operations
user_pref("browser.sessionstore.interval", 30000);


//SSL (Secure Sockets Layer) / TLS (Transport Layer Security)//
// Control TLS versions with min and max
user_pref("security.tls.version.min", 1);
user_pref("security.tls.version.fallback-limit", 3);
user_pref("security.tls.version.max", 4);
// Disable SSL session tracking
user_pref("security.ssl.disable_session_identifiers", true);
// Disable SSL Error Reporting
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

//OCSP (Online Certificate Status Protocol).//
// Enable OCSP Stapling
user_pref("security.ssl.enable_ocsp_stapling", true);
// Control use of OCSP responder servers to confirm current validity of certificates
user_pref("security.OCSP.enabled", 1);

//Certs, HSTS, HPKP.//
// Disable Windows 8.1's Microsoft Family Safety cert
user_pref("security.family_safety.mode", 0);
// Enforce strict pinning
user_pref("security.cert_pinning.enforcement_level", 2);
// Enforce HSTS preload list
user_pref("network.stricttransportsecurity.preloadlist", true);
// Enable Mixed-Content-Blocker to use the HSTS cache but disable the HSTS Priming requests
user_pref("security.mixed_content.use_hsts", true);
user_pref("security.mixed_content.send_hsts_priming", false);
// Disallow mixed content
user_pref("security.mixed_content.block_display_content", true);


//Ciphers.//
// Disable or limit SHA-1
user_pref("security.pki.sha1_enforcement_level", 1);
// Disable 3DES (effective key size < 128)
user_pref("security.ssl3.rsa_des_ede3_sha", false);
// Disable 128 bits
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
// Disable DHE (Diffie-Hellman Key Exchange)
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);

//Security UI elements.//
// Display warning (red padlock) for "broken security"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// Control "Add Security Exception" dialog on SSL warnings
user_pref("browser.ssl_override_behavior", 1);
// Display advanced information on Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);


//Fonts.//
// Enable icon fonts (glyphs)
user_pref("gfx.downloadable_fonts.enabled", true);
// Disable special underline handling for a few fonts which you will probably never use.
user_pref("font.blacklist.underline_offset", "");
// Disable graphite which FF49 turned back on by default
user_pref("gfx.font_rendering.graphite.enabled", false);


//Headers / Referrer//
// Control when images/links send a referer
user_pref("network.http.sendRefererHeader", 2);
// Control the amount of information to send
user_pref("network.http.referer.trimmingPolicy", 0);
// Control when to send a referer
user_pref("network.http.referer.XOriginPolicy", 1);
// Control the amount of information to send
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);
// Disable spoofing a referer
user_pref("network.http.referer.spoofSource", false);
// Set the default Referrer Policy
user_pref("network.http.referer.userControlPolicy", 3);
// Hide (not spoof) referrer when leaving a .onion domain
user_pref("network.http.referer.hideOnionSource", true);
// Disable the DNT HTTP header, which is essentially USELESS
user_pref("privacy.donottrackheader.enabled", false);


//Containers.//
// Enable them
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.enabled", true);
// Enable a private container for thumbnail loads
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
// Set long press behaviour on "+ Tab" button to display container menu
user_pref("privacy.userContext.longPressBehavior", 2);


//Plugin//
// Set default plugin state (i.e. new plugins on discovery) to never activate
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);
// Enable click to play and set to 0 minutes
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
// Set a plugin state
user_pref("plugin.state.flash", 0);
// Disable plugins using external/untrusted scripts with XPCOM or XPConnect
user_pref("security.xpconnect.plugin.unrestricted", false);
// Disable scanning for plugins
user_pref("plugin.scan.plid.all", false);
// Disable all GMP (Gecko Media Plugins)
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);
// Disable widevine CDM (Content Decryption Module)
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);
// Disable all DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);
// Disable the OpenH264 Video Codec by Cisco to "Never Activate"
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,");
user_pref("media.gmp-manager.updateEnabled", false); 


////Media, camera, mic
// Disable WebRTC (Web Real-Time Communication)
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.navigator.video.enabled", false);
// Limit WebRTC IP leaks if using WebRTC
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
// Disable WebGL (Web Graphics Library), force bare minimum feature set if used & disable WebGL extensions
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
// Disable WebGL debug info being available to websites
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.enable-webgl2", false);
// Disable speech recognition
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
// Disable screensharing
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
// Disable camera stuff
user_pref("camera.control.face_detection.enabled", false);
// Enable/disable MSE (Media Source Extensions)
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.mp4.enabled", true);
user_pref("media.mediasource.webm.audio.enabled", true);
user_pref("media.mediasource.webm.enabled", true);
// Disable canvas capture stream
user_pref("canvas.capturestream.enabled", false);
// Disable camera image capture
user_pref("dom.imagecapture.enabled", false);
// Disable offscreen canvas
user_pref("gfx.offscreencanvas.enabled", false);
// Disable audio auto-play in non-active tabs
user_pref("media.block-autoplay-until-in-foreground", true);


//UI meddling.// 
// Disable [new window] scripts hiding or disabling the following
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
// Disable [popup window] scripts hiding or disabling the following
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.allow_scripts_to_close_windows", false);
// Disable links opening in a new window
user_pref("browser.link.open_newwindow.restriction", 0);
// Disable "Confirm you want to leave" dialog on page close
user_pref("dom.disable_beforeunload", true);


//Web workers.//
// Disable web notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
// Disable push notifications
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");


//// DOM and Javascript ////
// Disable User Timing API
user_pref("dom.enable_user_timing", false);
// Disable resource/navigation timing
user_pref("dom.enable_resource_timing", false);
// Disable timing attacks - javascript performance fingerprinting
user_pref("dom.enable_performance", false);
// Disable shaking the screen
user_pref("dom.vibrator.enabled", false);
// Set max popups from a single non-click event - default is 20!
user_pref("dom.popup_maximum", 3);
// Limit events that can cause a popup
user_pref("dom.popup_allowed_events", "click dblclick");
// Disable idle observation
user_pref("dom.idle-observers-api.enabled", false);
// Disable full-screen API
user_pref("full-screen-api.enabled", false);
// Disable Intersection Observer API
user_pref("dom.IntersectionObserver.enabled", false);
// Enforce websites to ask to store data for offline use
user_pref("offline-apps.allow_by_default", false);
user_pref("browser.offline-apps.notify", true);


//// HARDWARE FINGERPRINTING
// Disable gamepad API - USB device ID enumeration
user_pref("dom.gamepad.enabled", false);
// Disable giving away network info
user_pref("dom.netinfo.enabled", false);
// Disable virtual reality devices
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.osvr.enabled", false);
user_pref("dom.vr.openvr.enabled", false);
// 2505: disable media device enumeration
user_pref("media.navigator.enabled", false);
// 2506: disable video statistics - JS performance fingerprinting
user_pref("media.video_stats.enabled", false);
// Disable keyboard fingerprinting
user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
// Disable hardware acceleration to reduce graphics fingerprinting
user_pref("gfx.direct2d.disabled", true);
user_pref("layers.acceleration.disabled", true);
// Disable touch events
user_pref("dom.w3c_touch_events.enabled", 0);
// Disable Web Audio API
user_pref("dom.webaudio.enabled", false);
// Disable MediaDevices change detection
user_pref("media.ondevicechange.enabled", false);
// Disable device sensor API
user_pref("device.sensors.enabled", false);
// Disable Presentation API
user_pref("dom.presentation.enabled", false);
user_pref("dom.presentation.controller.enabled", false);
user_pref("dom.presentation.discoverable", false);
user_pref("dom.presentation.discovery.enabled", false);
user_pref("dom.presentation.receiver.enabled", false);
user_pref("dom.presentation.session_transport.data_channel.enable", false);
// Disable site specific zoom
user_pref("browser.zoom.siteSpecific", false);


////MISC LEAKS PRIVACY AND SECURITY
// Disable sending additional analytics to web servers
user_pref("beacon.enabled", false);
// Discourage downloading to desktop
user_pref("browser.download.folderList", 2);
// Enforce user interaction for security by always asking the user where to download
user_pref("browser.download.useDownloadDir", false);
// Remove temp files opened with an external application
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);
// Disable hiding mime types not associated with a plugin
user_pref("browser.download.hide_plugins_without_extensions", false);
// Disable page thumbnail collection
user_pref("browser.pagethumbnails.capturing_disabled", true);
// Disable JAR from opening Unsafe File Types
user_pref("network.jar.open-unsafe-types", false);
// Disable WebIDE to prevent remote debugging and add-on downloads
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
// Disable SimpleServiceDiscovery - which can bypass proxy settings - e.g. Roku
user_pref("browser.casting.enabled", false);
user_pref("gfx.layerscope.enabled", false);
// Disable HTTP2 (which was based on SPDY which is now deprecated)
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
user_pref("network.http.spdy.enabled.http2", false);
// Enable Firefox's built-in PDF reader
user_pref("pdfjs.disabled", false);
// Enforce the proxy server to do any DNS lookups when using SOCKS
user_pref("network.proxy.socks_remote_dns", true);
// Limit HTTP redirects (this does not control redirects with HTML meta tags or JS)
user_pref("network.http.redirection-limit", 10);
// Disable middle mouse click opening links from clipboard
user_pref("middlemouse.contentLoadURL", false);
// Enforce a security delay when installing add-ons (milliseconds)
user_pref("security.dialog_enable_delay", 700);
// Enable Strict File Origin Policy on local files
user_pref("security.fileuri.strict_origin_policy", true);
// Enable Subresource Integrity (SRI)
user_pref("security.sri.enable", true);
// Disable DNS requests for hostnames with a .onion TLD
user_pref("network.dns.blockDotOnion", true);
// Disable optional user agent token
user_pref("general.useragent.compatMode.firefox", false);
// Disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
// Disable remote JAR files being opened, regardless of content type
user_pref("network.jar.block-remote-files", true);
// Disable DeviceStorage API
user_pref("device.storage.enabled", false);
// Remove webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");
// Disable HTTP Alternative Services
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
// Uisable various developer tools in browser context
user_pref("devtools.chrome.enabled", false);
// Lock down allowed extension directories
user_pref("extensions.enabledScopes", 1);
user_pref("extensions.autoDisableScopes", 15);
// Remove paths when sending URLs to PAC scripts
user_pref("network.proxy.autoconfig_url.include_path", false);
// Disable "image/" mime types bypassing CSP
user_pref("security.block_script_with_wrong_mime", true);
// Enforce Punycode for Internationalized Domain Names to eliminate possible spoofing security risk
user_pref("network.IDN_show_punycode", true);
// Enable CSP (Content Security Policy)
user_pref("security.csp.enable", true);
// Enable CSP 1.1 experimental hash-source directive
user_pref("security.csp.experimentalEnabled", true);
// Enable First Party Isolation
user_pref("privacy.firstparty.isolate", true);
// Enforce FPI restriction for window.opener
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);
// Enable privacy.resistFingerprinting
user_pref("privacy.resistFingerprinting", true);


////COOKIES
// Set third-party cookies (if enabled, see above user_pref) to session-only
user_pref("network.cookie.thirdparty.sessionOnly", true);
// Clear localStorage and UUID when a WebExtension is uninstalled
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);
// Disable HTTP sites setting cookies with the "secure" directive
user_pref("network.cookie.leave-secure-alone", true);


////SHUTDOWN
// Enable Firefox to clear history items on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// Set what history items to clear on shutdown
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", false);
// Set what history items to clear with Ctrl-Shift-Del (to match above)
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", false);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", false);
// Reset default 'Time range to clear' for 'Clear Recent History'
user_pref("privacy.sanitize.timeSpan", 0);

//Personal settings.//
// Disable annoying warnings
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
// Disable closing browser with last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
// Disable backspace
user_pref("browser.backspace_action", 2);
// Disable enforced add-on signing
user_pref("xpinstall.signatures.required", false);
// Open new windows in a new tab instead
user_pref("browser.link.open_newwindow", 3);
// Enable ctrl-tab previews
user_pref("browser.ctrlTab.previews", true);
// Don't open "page/selection source" in a tab
user_pref("view_source.tab", false);
// Control spellchecking
user_pref("layout.spellcheckDefault", 1);
// Disable automatic "Work Offline" status
user_pref("network.manage-offline-status", false);
// Set submenu delay in milliseconds
user_pref("ui.submenuDelay", 150);
// Set maximum number of daily bookmark backups to keep
user_pref("browser.bookmarks.max_backups", 2);
// Control urlbar click behaviour (with defaults)
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
// Control tab behaviours (with defaults)
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
// Switch to the parent tab (if it has one) on close
user_pref("browser.tabs.selectOwnerOnClose", true);
// Stay on the parent tab when opening links in a new tab
user_pref("browser.tabs.loadInBackground", true);
// Set behavior of pages normally meant to open in a new window (such as target="_blank"
user_pref("browser.tabs.loadDivertedInBackground", true);
// Hide recently bookmarked items
user_pref("browser.bookmarks.showRecentlyBookmarked", false);
// Disable "Reader View"
user_pref("reader.parse-on-load.enabled", false);
// Decode URLs on copy from the urlbar
user_pref("browser.urlbar.decodeURLsOnCopy", true);
// Disable middle-click enabling auto-scrolling
user_pref("general.autoScroll", false);
// Findbar 
user_pref("findbar.highlightAll", true);
user_pref("findbar.modalHighlight", true);
// Servo
user_pref("layout.css.servo.enabled", true);
// Remote webextensions
user_pref("extensions.webextensions.remote", true);
// Search bar
user_pref("browser.search.openintab", true);
user_pref("browser.search.reset.enabled", false);
