// ======================================
// SUTTHISA E-BOOK PORTFOLIO
// ======================================

window.ebookPortfolio = function () {
    return {
        currentPage: 1,
        totalPages: 3,
        openToc: false,

        pages: [
            { number: 1, title: "หน้าปก" },
            { number: 2, title: "ประวัติส่วนตัว" },
            { number: 3, title: "ผลงานและกิจกรรม" }
        ],

        init() {
            console.log("E-Book Portfolio Loaded!");

            this.$nextTick(() => {
                this.refreshIcons();
            });
        },

        goToPage(page) {
            if (page < 1 || page > this.totalPages) return;

            this.currentPage = page;
            this.openToc = false;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            this.refreshIcons();
        },

        nextPage() {
            this.goToPage(this.currentPage + 1);
        },

        prevPage() {
            this.goToPage(this.currentPage - 1);
        },

        toggleToc() {
            this.openToc = !this.openToc;
        },

        closeToc() {
            this.openToc = false;
        },

        refreshIcons() {
            this.$nextTick(() => {
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            });
        }
    };
};

// Check JavaScript
console.log("Portfolio JavaScript Connected");
