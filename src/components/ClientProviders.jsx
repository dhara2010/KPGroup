"use client";

import React from "react";
import dynamic from "next/dynamic";

const InteractiveCanvas = dynamic(() => import("./LayoutWrappers").then(mod => mod.InteractiveCanvas), { ssr: false });
const ScrollProgress = dynamic(() => import("./LayoutWrappers").then(mod => mod.ScrollProgress), { ssr: false });
const CustomCursor = dynamic(() => import("./LayoutWrappers").then(mod => mod.CustomCursor), { ssr: false });
const SmoothScroll = dynamic(() => import("./LayoutWrappers").then(mod => mod.SmoothScroll), { ssr: false });
const PageTransition = dynamic(() => import("./LayoutWrappers").then(mod => mod.PageTransition), { ssr: false });

export default function ClientProviders({ children }) {
  return (
    <>
      <InteractiveCanvas />
      <ScrollProgress />
      <CustomCursor />
      <SmoothScroll>
        <PageTransition>
          {children}
        </PageTransition>
      </SmoothScroll>
    </>
  );
}
