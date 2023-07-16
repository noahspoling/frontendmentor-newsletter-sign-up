import { html, reactive, watch } from './arrow.js'
import {form} from './form.js'
import success from './success.js'


function handleBack() {
    state.selectedTab = 0
}

const submittedView = (state) => html`
    <div id="submitWindow">
        <img src="/frontendmentor-newsletter-sign-up/docs/assets/icon-success.svg"/>
        <h1 id="TitleText">Thanks for subscribing!</h1>
        <p>
            A confirmation email has been sent to <span>${state.submittedValue}</span>. 
            Please open it and click the button inside to confirm your subscription.
        </p>
        <button @click="${handleBack}">Go Back</button>
    </div>
    
`

export const state = reactive({
    submittedValue: '',
    pages : [
        {
            name: 'formInput',
            element: form,
        },
        {
            name: 'formSubmitted',
            element: submittedView,
        },
    ],
    selectedTab: 0,
})



const app = html`
<div>
    ${() => {
        return state.pages[state.selectedTab].element(state);
    }}
</div>
`

const appElement = document.getElementById('root');

app(appElement)
