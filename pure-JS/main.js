const employees_pages_id = document.getElementById('employees-pages-id');
let currentUser;
let database;

class User {
    constructor(props) {
        this.id = props.id;
        this.email = props.email;
        this.role = props.role;
        this.firstName_EN = props.firstName_EN;
        this.lastName_EN = props.lastName_EN;
        this.image = props.image;
    }
    

    renderHeder() {
        const userHeaderID = document.getElementById('user-header')
        let userHeaderHTML = userHeaderID.innerHTML
        let userHeader = ''
        userHeader += userHeaderHTML.replace(/<%image%>/g, currentUser.image)
                                    .replace(/<%fullNameEN%>/g, getFullNameEN.apply(currentUser)) // add concat Name + Lastname
        document.getElementById('header-root').innerHTML = userHeader
        this.canLogOut()
    }

    canLogOut() {
        document.getElementById('log-out').addEventListener('click', logOut)
    }

    buildProfileDOM (targetUser) {
        const sectionLeft = document.getElementById('left');
        const sectionRight = document.getElementById('right');
        const profileTemplateID = document.getElementById('profile-page-template');
        const infoTemplateID = document.getElementById('profile-info-template');
        let profileTemplate = profileTemplateID.innerHTML;
        let infoTemplate = infoTemplateID.innerHTML;
        let profileBody = ''
        let infoBody = ''
        targetUser.forEach(data => {
                profileBody += profileTemplate.replace(/<%img%>/g, data.image)
                                              .replace(/<%gender%>/g, data.gender)
                                              .replace(/<%fullNameEN%>/g, getFullNameEN.apply(data))
                                              .replace(/<%fullNameRU%>/g, getNameWithPatr.apply(data))
                                              .replace(/<%id%>/g, data.id)
        })
    
        targetUser.forEach(data => {
            infoBody += infoTemplate.replace(/<%img%>/g, data.image)
                                    .replace(/<%department%>/g, data.department)
                                    .replace(/<%room%>/g, data.room)
                                    .replace(/<%internal_phone%>/g, data.internal_phone)
                                    .replace(/<%mobile_phone%>/g, data.mobile_phone)
                                    .replace(/<%email%>/g, data.email)
                                    .replace(/<%skype%>/g, data.skype)
                                    .replace(/<%c_number%>/g, data.c_number)
        })
    
        sectionLeft.innerHTML = profileBody;
        sectionRight.innerHTML = infoBody;
    }

    openProfileInfo(event) {
        const btnType = event.target.dataset.btn
        const id = event.target.dataset.id
        const targetUser = []
            if (btnType === 'profile') {
                for (let i = 0; i < database.length; i++) {
                    if (+id === database[i].id) {
                        targetUser.push(database[i])
                        currentUser.buildProfileDOM(targetUser)
                    }
                } 
            }
    }
}


class Editor extends User {
    constructor(props) {
        super(props)
    }

    // Inherits buildProfileDOM() from parent and add editing capabilities
    buildProfileDOM(targetUser) {
        super.buildProfileDOM(targetUser)
        this.showEditLink(targetUser)
    }

    showEditLink (targetUser) {
        const editTop = document.getElementById('edit-details-top')
        const editBottom = document.getElementById('edit-details-bottom')
        const editLink = document.createElement('a')
        editLink.src = '#'
        editLink.className = 'main-info-edit'
        editLink.textContent = 'Edit Details'
        editLink.dataset.link = 'open-edit-form'
    

        editTop.append(editLink.cloneNode(true))
        editBottom.append(editLink)
        document.addEventListener('click', (event) => {
            if(event.target.dataset.link === 'open-edit-form'){
                this.createEditForm(targetUser)
            }
        })
    }

    //Creating a profile edit form based on template
    createEditForm (targetUser) {
        const sectionLeft = document.getElementById('left');
        const sectionRight = document.getElementById('right');
        const profileTemplateID = document.getElementById('open-edit-profile');
        const infoTemplateID = document.getElementById('open-edit-info');
        let profileTemplate = profileTemplateID.innerHTML;
        let infoTemplate = infoTemplateID.innerHTML;
        let profileBody = ''
        let infoBody = ''
        
        targetUser.forEach(data => {
                profileBody += profileTemplate.replace(/<%image%>/g, data.image)
                                              .replace(/<%id%>/g, data.id)
        })
        targetUser.forEach(data => {
            console.log(data)
            infoBody += infoTemplate.replace(/<%firstName_EN%>/g, data.firstName_EN)
                                    .replace(/<%lastName_EN%>/g, data.lastName_EN)
                                    .replace(/<%firstName_RU%>/g, data.firstName_RU)
                                    .replace(/<%lastName_RU%>/g, data.lastName_RU)
                                    .replace(/<%patronym_RU%>/g, data.patronym_RU)
                                    .replace(/<%gender%>/g, data.gender)
                                    .replace(/<%worker_type%>/g, data.worker_type)
                                    .replace(/<%role%>/g, data.role)
                                    .replace(/<%password%>/g, data.password)
                                    .replace(/<%department%>/g, data.department)
                                    .replace(/<%room%>/g, data.room)
                                    .replace(/<%internal_phone%>/g, data.internal_phone)
                                    .replace(/<%mobile_phone%>/g, data.mobile_phone)
                                    .replace(/<%email%>/g, data.email)
                                    .replace(/<%skype%>/g, data.skype)
                                    .replace(/<%c_number%>/g, data.c_number)
        })
    
        sectionLeft.innerHTML = profileBody;
        sectionRight.innerHTML = infoBody;

        editDataFromForm()
    }

    // edit user data and make changes to the database
    editDataFromForm() {
        const form = document.getElementById('edit-profile-form');
        
        form.addEventListener('submit', function (event) {
            event.preventDefault();
    
            let formData = new FormData(this);
            formData = Object.fromEntries(formData);
            fetchData.post('/edit', formData)
            this.reset();
            });
        
    };

    
}


class Admin extends Editor {
    constructor(props) {
        super(props)
    }
    
    renderHeder() {
        const adminHeaderID = document.getElementById('admin-header')
        let adminHeaderHTML = adminHeaderID.innerHTML
        let adminHeader = ''
        adminHeader += adminHeaderHTML.replace(/<%image%>/g, currentUser.image)
                                    .replace(/<%fullNameEN%>/g, getFullNameEN.apply(currentUser)) // add concat Name + Lastname
        document.getElementById('header-root').innerHTML = adminHeader 
        document.getElementById('open-admin').addEventListener('click', () => renderAdminPanel(database)) //assign handler to open the admin panel
        document.getElementById('create-account').addEventListener('click', this.createNewAccount)
        this.canLogOut()
    }

    createNewAccount() {
        const sectionLeft = document.getElementById('left');
        const sectionRight = document.getElementById('right');
        const createProfileID = document.getElementById('create-user-profile');
        const createInfoID = document.getElementById('create-user-info');
        let createProfile = createProfileID.innerHTML;
        let createInfo = createInfoID.innerHTML;
        sectionLeft.innerHTML = createProfile;
        sectionRight.innerHTML = createInfo;
        sendDataFromForm()
    }

    sendDataFromForm() {
        const form = document.getElementById('create-account-form');
        
        form.addEventListener('submit', function (event) {
            event.preventDefault();
    
            let formData = new FormData(this);
            formData = Object.fromEntries(formData);
            fetchData.post('/create', formData)
            this.reset();
            });
        
    };

    editUserRole(event) {
        const id = event.target.dataset.id
        const role = event.target.dataset.role
            if(role === 'user' || role === 'editor'){
                fetchData.post('/role', {id, role})  
            } 
    }
}

// function creates the current user based on their role
const createUser = (user) => {
    if (user.role === 'admin') {
         return new Admin(user);
    } else if (user.role === 'editor') {
        return new Editor(user);
    } else return new User(user);
}


const proxy = jsonData => {
    jsonData.forEach(el => el.visible = true)
}


const getFullNameEN  = function () {
    return (`${this.firstName_EN} ${this.lastName_EN}`)
}

const getFullNameRU = function () {
    return (`${this.firstName_RU} ${this.lastName_RU}`)
}

const getNameWithPatr = function () {
    return (`${this.firstName_RU} ${this.lastName_RU} ${this.patronym_RU}`)
}


const buildDOM = (jsonData, tmpl = 'block-style') => {
    const template = document.getElementById(tmpl);
          templateHtml = template.innerHTML;
          sortDATA = jsonData.filter(el => el.visible)
          employeesPagesBody = ''
    sortDATA.forEach(data => {
            employeesPagesBody += templateHtml.replace(/<%id%>/g, data.id)
                                .replace(/<%img%>/g, data.image)
                                .replace(/<%fullNameEN%>/g, getFullNameEN.apply(data))
                                .replace(/<%fullNameRU%>/g, getFullNameRU.apply(data))
                                .replace(/<%department%>/g, data.department)
                                .replace(/<%room%>/g, data.room)
    })

    employees_pages_id.innerHTML = employeesPagesBody;
}


const countDisplayEmployees = jsonData => {
    const displayCount = jsonData.filter(el => el.visible)
    document.getElementById('employees-count').innerHTML = `${displayCount.length} employees displayed`
}


const inputSearch = jsonData => {
    const searchValue = document.getElementById('people-search-input').value.toLowerCase()
    console.log(jsonData)
    jsonData.map(element => {
        return ( element.visible = `${element.firstName_EN} ${element.lastName_EN}
                ${element.firstName_RU} ${element.lastName_RU}`.toLowerCase().includes(searchValue)
        )
    })

    document.getElementById('display_block').classList.contains('view-type-active-block') ? buildDOM(jsonData, 'block-style') : buildDOM(jsonData, 'inline-style')
    
}


const displayBlock = jsonData => {
    buildDOM(jsonData, 'block-style')
    document.getElementById('display_block').classList.add('view-type-active-block')
    document.getElementById('display_inline').classList.remove('view-type-active-inline')
}
document.getElementById('display_block').addEventListener('click', displayBlock)


const displayInline = jsonData => {
    buildDOM(jsonData, 'inline-style')
    let fragment = document.createDocumentFragment();
    let template = document.getElementById('inline-style-navigation').content
    fragment.appendChild(template.cloneNode(true))
    employees_pages_id.prepend(template)

    document.getElementById('display_inline').classList.add('view-type-active-inline');
    document.getElementById('display_block').classList.remove('view-type-active-block');
}


// ADMIN PANEL 

// render admin panel with users, if user.role === admin
const renderAdminPanel = (jsonData) => {
    let adminPanelWrapper = document.createElement('section');
    adminPanelWrapper.id = 'admin-panel-wrapper'
    document.getElementById('wrapper').innerHTML = ''

    // creation temporary variables
    const template = document.getElementById('admin-panel-user');
          templateHtml = template.innerHTML;
          panelHeader = document.getElementById('admin-panel-header')
          panelHeaderHTML = panelHeader.innerHTML
          employeesPagesBody = ''
          panelHeaderResult = ''
    jsonData.forEach(data => { // making a replacement in the first template
            employeesPagesBody += templateHtml.replace(/<%image%>/g, data.image)
                                .replace(/<%fullNameEN%>/g, getFullNameEN.apply(data))
                                .replace(/<%fullNameRU%>/g, getFullNameRU.apply(data))
                                .replace(/<%id%>/g, data.id)
                                // сheckRole(args)  args - users object, property and value
                                .replace(/<%employee%>/g, checkRole.call(data, 'worker_type', 'employee'))
                                .replace(/<%hr%>/g, checkRole.call(data, 'worker_type', 'hr'))
                                .replace(/<%user%>/g, checkRole.call(data, 'role', 'user'))
                                .replace(/<%editor%>/g, checkRole.call(data, 'role', 'editor'))
                                .replace(/<%admin%>/g, checkRole.call(data, 'role', 'admin'))
                                
    })
    // here i need enclosed elements , then i make another replacement
    //                <panelHeader>
    //                      <employeesPagesBody>...</employeesPagesBody>
    //                 </panelHeader>
    panelHeaderResult = panelHeaderHTML.replace(/<%insertUsers%>/g, employeesPagesBody)
    document.getElementById('wrapper').append(adminPanelWrapper)
    adminPanelWrapper.innerHTML = panelHeaderResult
}

// Optimizing function that help avoid large number of check operations
const checkRole = function(column, field) {
    if (this[column] === field) {
        return 'user-role-active'
    } else 
        return ''
}


        
// TINY PART OF AUTHENTICATION

// checking for an already authorized user
const autoLogin = (data) => {
    database = data;
    let key = Object.keys(localStorage);
    if (key.length < 1) { // if local storage empty...
        createLoginForm() // create forn and asign handler
            document.getElementById('login-form').addEventListener('submit', () => {
                authFormHandler(event, data)
        })    
    } else { // if local storage has value, on it base will be created instance user
        database = data;
        const user = checkUser(...key, localStorage.getItem(key), data)
        console.log(user)
        currentUser = createUser(...user)
        currentUser.renderHeder()
    }
}


// this function is needed for working with css
const createLoginForm = () => {
    let templateAuth = document.getElementById('template-authorization').content
    document.getElementById('container').prepend(templateAuth)
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const form = document.getElementById('login-wrapper')
    
    form.addEventListener('click', (event) => {
        event.stopPropagation()
    })
    // change the style on click
    function addClick(){
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function removeClick(){
        let parent = this.parentNode.parentNode;
        if(this.value == ""){
            parent.classList.remove("focus");
        }
    }

    email.addEventListener("focus", addClick);
    email.addEventListener("blur", removeClick);
    password.addEventListener("focus", addClick);
    password.addEventListener("blur", removeClick);
   
}

const logOut = () => {
    localStorage.clear()
    location.href = 'index.html'
}



// Checking the user's existence in the database with the entered data
const checkUser = (targetEmail, targetPassword, database) => { // 1 and 2 arguments it's entered data, 3 argument it's database
    const findUser = database.filter(el => targetEmail === el.email && targetPassword === el.password) // return found user or empty arr  
    return findUser
}

const authFormHandler = (event, data) => {
    event.preventDefault()
    const email = event.target.querySelector('#email').value;
    const password = event.target.querySelector('#password').value;
    console.log(email.length)
    if (email.length < 1 || password.length < 1) { // check for the correctness entered data
        console.log('Please enter correct data again')
    } else if (email.length > 1 || password.length > 1) { 
        const user = checkUser(email, password, data)   // for optimization, request made only if...
                                                        // all entered data is correct
        if (user.length > 0) {
            localStorage.setItem(email, password) 
            currentUser = createUser(...user)
            currentUser.renderHeder()
            document.getElementById('login-wrapper').remove()
        } else console.log('This account does not exist')
        
    } else console.log('This account does not exist')
       
}

// FORM
function sendDataFromForm() {
    const form = document.getElementById('create-account-form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let formData = new FormData(this);
        formData = Object.fromEntries(formData);
        fetchData.post('/create', formData)
        this.reset();
        });
    
};







const dataFunctionsWrapper = (data) => {
    proxy(data)
    buildDOM(data)
    countDisplayEmployees(data)
    autoLogin(data)


    document.getElementById('people-search-button').addEventListener('click', () => inputSearch(data))
    document.getElementById('people-search-button').addEventListener('click', () => countDisplayEmployees(data))
    document.getElementById('display_block').addEventListener('click', () => displayBlock(data))
    document.getElementById('display_inline').addEventListener('click', () => displayInline(data))

    document.addEventListener('click', (event) => {
        currentUser.openProfileInfo(event)
    })

    document.addEventListener('click', (event) => {
        currentUser.editUserRole(event)
    })
}


fetchData.get(`/users`)
        .then(dataFunctionsWrapper)  
