/**
 * Check window width
 * If pc view ==> run
 */
if (window.innerWidth >= 1024) {
    window.addEventListener('DOMContentLoaded', () => {
        /**
         * Calculate width of images
         * Set width caption follow width images
         */
        const imgGap = 24
        const imagesWrapper = document.querySelector('.layout__top-images')
        const caption = document.querySelector('.layout__caption')
        const images = imagesWrapper.querySelectorAll('.layout__image')
        function setCaptionWidth() {
            if (images.length === 2) {
                const totalWidth = images[0].clientWidth + images[1].clientWidth + imgGap
                caption.style.width = `${totalWidth}px`
            }
        }
        setCaptionWidth()
        window.addEventListener('resize', setCaptionWidth)

        /**
         * Check index element
         * if even then add new class into element
         */
        const blocks = document.querySelectorAll('.layout__grid .layout__block');
        blocks.forEach((block, index) => {
            if ((index + 1) % 2 === 0) {
                block.classList.add('reverse');
            }
        });
    });
}
