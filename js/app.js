import { html, reactive, watch } from './arrow.js'
import {form} from './form.js'
import success from './success.js'


function handleBack() {
    state.selectedTab = 0
}

const submittedView = () => html`
    <div>
        <p>Submitted Value: </p>
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
