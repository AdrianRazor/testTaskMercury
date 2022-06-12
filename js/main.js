jQuery(function ($) {
  $(function () {
    function maskPhone() {
      var country = $("#country option:selected").val();
      switch (country) {
        case "ua":
          $("#phone").mask("+38 (99) 999-99-99");
          break;
        case "pl":
          $("#phone").mask("+48 (99) 999-99-99");
          break;
        case "at":
          $("#phone").mask("+43 (999) 999-9999");
          break;
      }
    }
    maskPhone();
    $("#country").change(function () {
      maskPhone();
    });
  });
});
