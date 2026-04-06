// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import styles from "./Cursor.module.scss";
import { useEffect, useRef, useCallback } from "react";
import { gsap, Linear } from "gsap";
import { IDesktop, isSmallScreen } from "pages";

const CURSOR_STYLES = {
  CURSOR: "fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50",
  FOLLOWER: "fixed hidden h-8 w-8 select-none pointer-events-none z-50",
  GLOW: "fixed hidden select-none pointer-events-none z-40",
};

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);
  const followerLabel = useRef<HTMLSpanElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  const onHover = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const cursorType = target.getAttribute("data-cursor");

    gsap.to(cursor.current, {
      scale: 0.5,
      duration: 0.3,
    });

    if (cursorType === "view") {
      // Expand follower into labeled circle
      gsap.to(follower.current, {
        width: 80,
        height: 80,
        marginLeft: -40,
        marginTop: -40,
        backgroundColor: "rgba(145, 70, 255, 0.25)",
        borderColor: "rgba(145, 70, 255, 0.6)",
        borderWidth: 1,
        duration: 0.3,
      });
      if (followerLabel.current) {
        followerLabel.current.textContent = "View";
        gsap.to(followerLabel.current, { opacity: 1, duration: 0.2 });
      }
    } else {
      gsap.to(follower.current, {
        scale: 3,
        duration: 0.3,
      });
    }
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      width: 32,
      height: 32,
      marginLeft: 0,
      marginTop: 0,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderColor: "transparent",
      borderWidth: 0,
      duration: 0.3,
    });
    if (followerLabel.current) {
      gsap.to(followerLabel.current, { opacity: 0, duration: 0.15 });
    }
  };

  const moveCircle = (e: MouseEvent) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone,
    });
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone,
    });
    gsap.to(glow.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
      ease: "power2.out",
    });

    // Magnetic effect on nearby buttons
    const magnetTargets = document.querySelectorAll("[data-magnetic]");
    magnetTargets.forEach((el) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < 80) {
        const pullX = (e.clientX - centerX) * 0.15;
        const pullY = (e.clientY - centerY) * 0.15;
        gsap.to(el, { x: pullX, y: pullY, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
      }
    });
  };

  const initCursorAnimation = useCallback(() => {
    if (!follower.current || !cursor.current || !glow.current) return;
    follower.current.classList.remove("hidden");
    cursor.current.classList.remove("hidden");
    glow.current.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll(".link").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });

    // Also listen for data-cursor elements (project cards etc.)
    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
  }, []);

  useEffect(() => {
    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();
    }
  }, [cursor, follower, isDesktop, initCursorAnimation]);

  return (
    <>
      <div
        ref={cursor}
        className={`${styles.cursor} ${CURSOR_STYLES.CURSOR}`}
      ></div>
      <div
        ref={follower}
        className={`${styles.cursorFollower} ${CURSOR_STYLES.FOLLOWER}`}
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <span
          ref={followerLabel}
          className="text-white text-xs font-medium pointer-events-none"
          style={{ opacity: 0 }}
        />
      </div>
      <div
        ref={glow}
        className={CURSOR_STYLES.GLOW}
        style={{
          width: 400,
          height: 400,
          marginLeft: -200,
          marginTop: -200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(145, 70, 255, 0.045) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      ></div>
    </>
  );
};

export default Cursor;
