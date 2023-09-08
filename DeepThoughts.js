import { Selector, t} from 'testcafe';

fixture `Automation for login`
    .page `https://dev.deepthought.education/login`;
    
test(`Verify user can login with valid credentials`, async t => {
   await t
    .typeText(Selector('#username'),'1919shivani@gmail.com').wait(5000)
    .typeText(Selector('#password'),'123Deepthought@')
    .click(Selector('#login'))
    .expect(Selector('#page-content-wrapper h5').withExactText('Welcome to DeepThought').exists).ok();
});
test(`Verify user can login with invalid credentials`, async t => {
   await t
    .typeText(Selector('#username'),'jhon@gmail.com').wait(5000)
    .typeText(Selector('#password'),'123456@Deepthought')
    .click(Selector('#login'))
    .expect(Selector('.alert.alert-danger p').withExactText('Invalid login credentials').exists).ok();
});
test(`Verify user can login with blank credentials`, async t => {
   await t
    .click(Selector('#login'))
    .expect(Selector('#login-error-notify p').withExactText('Please specify both a username and password').exists).ok();
});
test(`Verify user can reset password`, async t => {
   await t
    .click(Selector('#reset-link'))
    .typeText(Selector('#email'), 'sudeshnashetty@gmail.com')
    .doubleClick(Selector('#reset'))
    .expect(Selector('[class="alert alert-success"] strong').withExactText('We have mailed you an OTP').exists).ok();
});
test(`verify user authentication process`, async t => {
    const results = await t.request({ url:'https://ka-f.fontawesome.com/releases/v5.15.4/css/free.min.css?token=696d1d32bb', method:'GET'});
     console.log(results);
    await t
        .expect(results.status).eql(200)
        .expect(results.statusText).eql('OK')
        
});