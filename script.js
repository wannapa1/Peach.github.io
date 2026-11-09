/* =====================================
   E-BOOK PORTFOLIO
   Sutthisa Intarajongjit
===================================== */

function ebookPortfolio() {
    return {

        // PAGE SYSTEM
        currentPage: 1,
        totalPages: 3,

        // TABLE OF CONTENTS
        openToc: false,

        // PAGE INFORMATION
        pages: [
            {
                number: 1,
                title: "หน้าปก",
                subtitle: "Portfolio & Profile"
            },
            {
                number: 2,
                title: "ประวัติส่วนตัว",
                subtitle: "Personal Information"
            },
            {
                number: 3,
                title: "ผลงานและกิจกรรม",
                subtitle: "Activities & Achievements"
            }
        ],

        // GO TO SPECIFIC PAGE
        goToPage(page) {
            if (page < 1 || page > this.totalPages) {
                return;
            }

            this.currentPage = page;
            this.openToc = false;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            this.refreshIcons();
        },

        // NEXT PAGE
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.goToPage(this.currentPage + 1);
            }
        },

        // PREVIOUS PAGE
        prevPage() {
            if (this.currentPage > 1) {
                this.goToPage(this.currentPage - 1);
            }
        },

        // TOGGLE TABLE OF CONTENTS
        toggleToc() {
            this.openToc = !this.openToc;
        },

        // CLOSE TABLE OF CONTENTS
        closeToc() {
            this.openToc = false;
        },

        // KEYBOARD CONTROL
        init() {
            this.$watch('currentPage', () => {
                this.refreshIcons();
            });

            this.$nextTick(() => {
                this.refreshIcons();
            });

            window.addEventListener('keydown', (event) => {

                if (event.key === "ArrowRight") {
                    this.nextPage();
                }

                if (event.key === "ArrowLeft") {
                    this.prevPage();
                }

                if (event.key === "Escape") {
                    this.closeToc();
                }
            });
        },

        // REFRESH LUCIDE ICONS
        refreshIcons() {
            this.$nextTick(() => {
                if (window.lucide) {
                    lucide.createIcons();
                }
            });
        }
    };
}

// INITIALIZE ICONS
document.addEventListener("DOMContentLoaded", () => {

    if (window.lucide) {
        lucide.createIcons();
    }

});
