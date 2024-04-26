import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const ZaloWidget = ({ oaid, welcomeMessage }) => {
    const ref = useRef(null);

    useEffect(() => {
        // Define a function to reload the Zalo SDK
        const reloadZaloWidget = () => {
            if (window.ZaloSocialSDK) {
                window.ZaloSocialSDK.reload();
            }
        };

        // Reload the Zalo widget once the SDK script has loaded
        if (ref.current && window.ZaloSocialSDK) {
            reloadZaloWidget();
        }
    }, []);

    return (
        <>
            <div
                ref={ref}
                className="zalo-chat-widget"
                data-oaid={oaid}
                data-welcome-message={welcomeMessage}
                data-autopopup="2"
                data-width="300"
                data-height="500">
            </div>
            <Script
                src="https://sp.zalo.me/plugins/sdk.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // Call the reload function when the script is loaded
                    if (window.ZaloSocialSDK) {
                        window.ZaloSocialSDK.reload();
                    }
                }}
            />
        </>
    );
};

export default ZaloWidget;
