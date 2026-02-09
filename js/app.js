document.addEventListener('alpine:init', () => {
    Alpine.data('designAgent', () => ({
        // UI State
        mobileMenuOpen: false,
        
        // Lightbox State
        lightboxOpen: false,
        lightboxImage: '',
        lightboxAlt: '',
        
        // Lightbox Functions
        openLightbox(imageSrc, imageAlt) {
            this.lightboxImage = imageSrc;
            this.lightboxAlt = imageAlt;
            this.lightboxOpen = true;
            document.body.style.overflow = 'hidden';
        },
        
        closeLightbox() {
            this.lightboxOpen = false;
            document.body.style.overflow = '';
        }
    }));
});
