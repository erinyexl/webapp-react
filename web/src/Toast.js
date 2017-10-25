import { Toast } from 'antd-mobile';

function showToast(str) {
    Toast.info(str, 2);
}

function showToastNoMask() {
    Toast.info('Toast without mask !!!', 2, null, false);
}

function successToast() {
    Toast.success('Load success !!!', 1);
}

function failToast() {
    Toast.fail('Load failed !!!', 1);
}

function offline() {
    Toast.offline('Network connection failed !!!', 1);
}

function loadingToast() {
    Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
    });
}

export {
    showToast,
    showToastNoMask,
    successToast,
    failToast,
    offline,
    loadingToast
}