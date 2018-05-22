admin_login();
sleep(5000);
$("#setTenantConfirmDiv #confirm").click();
sleep(5000);
$("#sceneConfirm").click();
sleep(1000);
$("#MessageDialog_3_0").click();
sleep(10000);


function admin_login(){
    document.getElementById("login_username_input_value").value = "admin";
    document.getElementById("login_password_input_value").value = "Changeme123";
    document.getElementById("login_submit").click();
}

function admin_operate(){
    $("#adminMspCreate").click();
    sleep(5000);
    
}

function sleep(d){
  for(var t = Date.now();Date.now() - t <= d;);
}


// document.getElementById("adminMspCreate").click();
document.getElementById("login_username_input_value").value = "admin@huawei.com";
document.getElementById("login_password_input_value").value = "Admin@1234";
document.getElementById("login_submit").click();