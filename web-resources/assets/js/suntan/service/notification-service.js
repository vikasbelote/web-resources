suntanApp.service("NotificationService", function() {
    
    this.success = function() {
        swal({
			title: 'Data saved successfully.',
			text: '',
			icon: 'success',
		});
    }

    this.danger = function() {
        swal({
			title: 'Error occured while executing your request',
			text: '',
			icon: 'error',
		});
    }

    this.logout = function() {
            swal({
    			title: 'Your session is Logout successfully',
    			text: '',
    			icon: 'success',
    		});
        }

    this.warning = function() {
        swal({
			title: 'Are you sure?',
			text: 'You will not be able to recover this imaginary file!',
			icon: 'warning',
			buttons: {
				cancel: {
					text: 'Cancel',
					value: null,
					visible: true,
					className: 'btn btn-default',
					closeModal: true,
				},
				confirm: {
					text: 'Warning',
					value: true,
					visible: true,
					className: 'btn btn-warning',
					closeModal: true
				}
			}
		});
    }

});