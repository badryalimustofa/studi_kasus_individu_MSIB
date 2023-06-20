function shareToFacebook() {
    FB.init({
      appId: '6019004488210507', // Ganti dengan App ID aplikasi Facebook Anda
      status: true,
      xfbml: true,
      version: 'v12.0'
    });
  
    FB.ui({
      method: 'share',
      href: 'https://web.facebook.com/groups/1379980698853115/permalink/2285210741663435/', // Ganti dengan URL yang ingin Anda bagikan
    }, function(response){
      if (response && !response.error_message) {
        console.log('Postingan berhasil dibagikan di Facebook.');
      } else {
        console.error('Terjadi kesalahan:', response && response.error_message);
      }
    });
  }
  