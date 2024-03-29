import * as React from "react";
import Head from 'next/head'

export const Meta: React.FC =
    () => (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            // @ts-ignore
            <style jsx global>{`
              body { 
                background: #000;
                font: 11px menlo;
                color: #fff;
              }
            `}</style>
        </div>
    )