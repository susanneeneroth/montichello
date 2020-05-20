$(function () {
  // Initialize form validation on the registration form.
  // name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // key names for the input field name="fullname"
      fullname: "required",
      email: {
        required: true,
        // Email validation
        email: true
      },
    },
    // Validation error messages
    messages: {
      fullname: "Please enter your name",
      email: "Please enter a valid email address"
    },
    // Action attribute
    submitHandler: function (form) {
      form.submit();
    }
  });
});