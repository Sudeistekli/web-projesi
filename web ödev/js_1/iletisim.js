new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
            message: ''
        },
        submitted: false
    },
    methods: {
        submitForm() {
            if (this.validateForm()) {
                this.submitted = true;
            }
        },
        resetForm() {
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
            this.submitted = false;
        },
        validateForm() {
            if (!this.formData.name || !this.formData.email || !this.formData.message) {
                alert('Lütfen tüm alanları doldurunuz.');
                return false;
            }
            if (!this.validateEmail(this.formData.email)) {
                alert('Geçerli bir email adresi giriniz.');
                return false;
            }
            return true;
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }
});