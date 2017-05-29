<template>
    <div class="col col-4 enc-extraSpacing">
        <h3>Decrypt</h3>
        <div class="form">

            <div class="form-item">
                <label>Passphrase</label>
                <input type="password" class="w50" v-model="passphrase">
            </div>

            
            <div class="form-item">
                <label>Message to Decrypt</label>
                <textarea rows="6" v-model="encryptedMessage"></textarea>
            </div>

            <div class="form-item">
                <button class="button secondary outline" v-on:click="decrypt()">Decrypt</button>
                <button class="button secondary outline" v-on:click="clear()">Clear</button>
            </div>

        </div>

        <br>
        <div class="form" v-if="showDecryptedMessage">
            <div class="form-item">
                <label>Decrypted Message</label>
                <textarea rows="6" v-model="decryptedMessage" readonly></textarea>
                <label class="margin-top: 10px;">Time Elapsed: {{ this.elapsedTime }}</label>
            </div>
        </div>
    </div>
</template>

<script>
    const { decrypt } = require('vigenere-cipher');

    export default {
        data () {
            return {
                passphrase: '',
                encryptedMessage: '',
                decryptedMessage: '',
                showDecryptedMessage: false,
                elapsedTime: ''
            }
        },

        methods: {
            decrypt () {

                if (this.passphrase.length > 0) {

                    if (this.encryptedMessage.length > 0) {

                        let startTime = moment();
                        this.decryptedMessage = decrypt(this.encryptedMessage, this.passphrase);
                        let endTime = moment();
                        this.elapsedTime = endTime.diff(startTime, 'milliseconds') + ' ms';
                        this.showDecryptedMessage = true;

                    } else {
                        alert('You must enter a message to decrypt!');
                    }

                } else {
                    alert('You must enter your passphrase!');
                }

            },

            clear () {
                this.passphrase = '';
                this.encryptedMessage = '';
                this.decryptedMessage = '';
                this.showDecryptedMessage = false;
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