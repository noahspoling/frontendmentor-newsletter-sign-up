import { html, reactive } from './arrow.js'

const formValues = reactive({
    inputEmail: '',
})

function handleInput(e) {
    formValues.inputEmail = e.target.value
}

function handleSubmit(e, state) {
    e.preventDefault()
    state.submitValue = formValues.inputEmail
    formValues.inputEmail = ''
    state.selectedTab = 1
}
/* Form validation */

export const form = (state) => html`
    <div id="formOuterWindow">
        <div id="formInputPane">
            <div id="formInfoBox">
                <h1 id="TitleText">Stay Updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul id="infoList">
                    <li id="infoListItem">Product discovery and building what matters</li>
                    <li id="infoListItem">Measuring to ensure updates are a success</li>
                    <li id="infoListItem">And much more!</li>
                </ul>
            </div>
            <form id="emailForm" @submit="${(e) => handleSubmit(e, state)}">
                <div id="formGroup">
                    <label>Email address</label>
                    <input type="email" id="emailInput" @input="${handleInput}" value="${() => formValues.inputEmail}" required/>
                    <p id="errorMessage" class="errorMessage">Valid Email Required</p>
                </div>
                <button type="submit">Subscribe to monthly newsletter</button>
                
            </form>
        </div>
        <div id="formImagePane">
            <img src="../docs/assets/illustration-sign-up-desktop.svg" class="desktop">
            <img src="./docs/assets/illustration-sign-up-mobile.svg" class="mobile">
        </div>
    </div>
`