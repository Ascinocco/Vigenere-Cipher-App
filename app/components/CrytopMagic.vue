<template>
    <div>
        <h1>Let's Encrypt Some stuff!</h1>
        <br>
        
        <h4>Authors:</h4>
        <ul>
            <li>Anthony Scinocco</li>
            <li>Lyka Sunesara</li>
            <li>Alex Friesen</li>
        </ul>
        <br>

        <div id="nav">
            <button id="selectEnrypt" v-on:click="showEncrypt()">Encrypt</button> | <button id="selectDecrypt" v-on:click="showDecrypt()">Decrypt</button>
        </div>

        <div v-if="encryptSelected">
            <br>

            <h1>Encrypt!</h1>

            <button v-on:click="clearEncrypt()">Clear All</button>
            <div>
                <label for="passphrase">Passphrase:</label>
                <input type="password" id="passphrase" name="passphrase" required="required" v-model="passphrase">
            </div>
            <br>

            <div>
                <label for="message">Message:</label>
                <br>
                <textarea id="message" name="message" required="required" placeholder="Enter your message" rows="5" cols="50" maxlength="60" v-model="message"></textarea>
            </div>
            <br>

            <button id="encrypt" v-on:click="encrypt()">Encrypt</button>

            <div v-if="showEncryptedMessage">
                <br>
                <textarea id="encryptedMessage" name="encryptedMessage" v-model="encryptedMessage" rows="5" cols="50" readonly></textarea>
            </div>
        </div>
        <div v-else-if="decryptSelected">
            <br>

            <h1>Decrypt!</h1>

            <button v-on:click="clearDecrypt()">Clear All</button>
            <div>
                <label for="decryptPassphrase">Passphrase:</label>
                <input type="password" id="decryptPassphrase" name="decryptPassphrase" required="required" v-model="decryptPassphrase">
            </div>
            <br>

            <div>
                <label for="decryptMessage">Message:</label>
                <br>
                <textarea id="decryptMessage" name="decryptMessage" required="required" placeholder="Enter your message" rows="5" cols="50" v-model="decryptMessage"></textarea>
            </div>
            <br>

            <button id="decrypt" v-on:click="decrypt()">Decrypt</button>

            <div v-if="showDecryptedMessage">
                <br>
                <textarea id="decryptedMessage" name="decryptedMessage" v-model="decryptedMessage" rows="5" cols="50" readonly></textarea>
            </div>
        </div>


    </div>
</template>

<script>
    // this code is bad, do not do this ever
    // lazzzzy
    const { encrypt, decrypt } = require('vigenere-cipher');
    export default {
        data() {
            return {
                decryptSelected: false,
                encryptSelected: false,

                passphrase: '',
                message: '',

                encryptedMessage: '',
                showEncryptedMessage: false,

                decryptPassphrase: '',
                decryptMessage: '',
                decryptedMessage: '',
                showDecryptedMessage: false,
            }
        },

        methods: {
            encrypt () {

                if (this.message.length >= 20 && this.message.length <= 60)
                {
                    if (this.passphrase.length >= 5 && this.passphrase.length <= 10) {
                        this.encryptedMessage = encrypt(this.message, this.passphrase);
                        this.showEncryptedMessage = true;
                    } else {
                        alert('Passphrase must be between 5 and 10 characters');
                    }
                } else {
                    alert('Message must be between 20 and 60 characters');
                }
            },
            decrypt () {
                this.decryptedMessage = decrypt(this.decryptMessage, this.decryptPassphrase);
                this.showDecryptedMessage = true;
            },

            showEncrypt () {
                this.encryptSelected = true;
                this.decryptSelected = false;
            }, 
            
            showDecrypt () {
                this.encryptSelected = false;
                this.decryptSelected = true;
            },

            clearEncrypt () {
                this.message = '';
                this.passphrase = '';
                this.encryptedMessage = '';
                this.showEncryptedMessage = false;
            },

            clearDecrypt () {
                this.decryptMessage = '';
                this.decryptedMessage = '';
                this.decryptPassphrase = '';
                this.showDecryptedMessage = false;
            }
        },

        mounted () {
            console.log('Component Mounted...');
        },

        created () {
            console.log('Component Created...');
        }
    }
</script>

<style>
</style>