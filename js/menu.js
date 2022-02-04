(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
    menuBtnRef.addEventListener("click", () => {
        const expanded = 
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
         menuBtnRef.setAttribute("aria-expanded", !expanded);
       
        menuBtnRef.classList.toggle("is-open");
        
      const scrollLockMethod = !expanded
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);

        mobileMenuRef.getAttribute("aria-expanded") === "true" || false;
         mobileMenuRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
        



        window.matchMedia('(max-width: 767px)').addEventListener('change', e => {
            if (!e.matches) return;
             mobileMenuRef.getAttribute("aria-expanded") === "true" || false;
         mobileMenuRef.setAttribute("aria-expanded", !expanded);
            mobileMenuRef.classList.toggle("is-open");
            bodyScrollLock.enableBodyScroll(document.body);
        })

        window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
            if (!e.matches) return;
            mobileMenuRef.classList.remove('is-open');
            mobileMenuRef.setAttribute('aria-expanded', false);
            bodyScrollLock.enableBodyScroll(document.body);

            
        })
    });
})
    ();