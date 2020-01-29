const LoginPage = require('../pages/login-page')
const TashPage = require('../pages/tasks-page')

const login_page = new LoginPage;
const tasks_page = new TashPage;
const tasksDb = require('../lib/task-db');
const usersDb = require('../lib/users-db')


describe('quando eu cadastro uma tarefa @temp', ()=>{
    
    var newtask = { title: "Estudar mais sobre Nodejs", tags: ['node', 'js', 'v8'] }
        
    beforeAll(() => {
        
        tasksDb.deleteByName(newtask.title).then(res => console.log(res))

        browser.get(login_page.path)
        login_page.with("denysrodrigues5@hotmail.com", "oliveira");
        tasks_page.newTaskButton.click();

        tasks_page.addTask(newtask);
        console.log('newtask :', newtask);
    });
    
    it('então vejo esta tarefa com status em andamento', () => {
        expect(
            tasks_page.getItem(newtask.title).getText()
        ).toContain("Em andamento")
    });
    
    afterAll(() => {
        login_page.logout();        
    })

});

describe('quando tento cadastrar uma tarefa', () => {
    beforeAll(() => {
        browser.get(login_page.path)
        login_page.with("denysrodrigues5@hotmail.com", "oliveira");
        tasks_page.newTaskButton.click();
    });
    it('com o nome muito curto', () => {
        tasks_page.addTask({ title: "Estudar" })
        expect(
            tasks_page.alertInfo.getText()
            ).toEqual("10 caracteres é o mínimo permitido.");
        });

    it('com o nome em branco', () => {
        tasks_page.addTask({ title: "" })
        expect(
            tasks_page.alertWarn.getText()
            ).toEqual("Nome é obrigatório.");
        });
    afterAll(() => {
        login_page.logout();
    })
});

describe('quando eu apago uma tarefa ', () => {

    var newtask = { title: "Tarefa para ser removida", tags: ['apagar', 'temp'], createdBy: null}

    beforeAll (async() => {

        await tasksDb.deleteByName(newtask.title).then(res => console.log(res))

       await  usersDb.getByEmail("denysrodrigues5@hotmail.com").then((user)=>{
          newtask.createdBy = user._id;
        })

        await tasksDb.addTask(newtask)//.then(res => console.log(res));
        browser.get(login_page.path)
        login_page.with("denysrodrigues5@hotmail.com", "oliveira");
        
    });

    it('então esta tarefa não deve ser exibida na lista', () => {
        tasks_page.getItem(newtask.title);
        //Exemplo

        //$('tr:contains("removida")').find('#delete-button').click();
        console.log('verificação')
    })

})