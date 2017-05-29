<template>
    <div class="col col-4 enc-extraSpacing">
        <h3>Encrypt</h3>
        <div class="form">

            <div class="form-item">
                <label>Passphrase</label>
                <input type="password" class="w50" v-model="passphrase">
            </div>

            
            <div class="form-item">
                <label>Message to Encrypt</label>
                <textarea rows="6" maxlength="60" v-model="message"></textarea>
            </div>

            <div class="form-item">
                <button class="button secondary outline" v-on:click="encrypt()">Encrypt</button>
                <button class="button secondary outline" v-on:click="clear()">Clear</button>
            </div>

        </div>

        <br>
        <div class="form" v-if="showEncryptedMessage">
            <div class="form-item">
                <label>Enrypted Message</label>
                <textarea rows="6" v-model="encryptedMessage" readonly></textarea>
                <label class="margin-top: 10px;">Time Elapsed: {{ this.elapsedTime }}</label>
            </div>
        </div>
    </div>
</template>

<script>
    const { encrypt } = require('vigenere-cipher');

    export default {
        data () {
            return {
                passphrase: '',
                message: '',
                encryptedMessage: '',
                showEncryptedMessage: false,
                elapsedTime: ''
            }
        },

        methods: {
            encrypt () {
                if (this.message.length >= 20 && this.message.length <= 60) {

                    if (this.passphrase.length >= 5 && this.passphrase.length <= 10) {
                        let startTime = moment();
                        this.encryptedMessage = encrypt(this.message, this.passphrase);
                        let endTime = moment();
                        this.elapsedTime = endTime.diff(startTime, 'milliseconds') + ' ms';
                        this.showEncryptedMessage = true;
                    } else {
                        alert('Passphrase must be between 5 and 10 characters!');
                    }

                } else {
                    alert('Message must be between 20 and 60 characters!');
                }
            },

            clear () {
                this.passphrase = '';
                this.message = '';
                this.encryptedMessage = '';
                this.showEncryptedMessage = false;
                this.elapsedTime = '';
            } 
        },

        mounted () {
            console.log('Component Mounted...');
        }
    }
</script>

<style>
    .enc-extraSpacing {
        margin: 25px 50px 50px 50px;
    }
</style>