jQuery(document).ready(function ($) {
  var successMessage = `<i style="color: 'white'" class="fa fa-info-circle"></i><b>Succès:</b> Votre demande est envoyée avec succès`;
  var ErrorMessage = `<i style="color: 'white'" class="fa fa-info-circle"></i><b>Erreur:</b> Veuillez vérifier vos données d'entrée`;

  $("#contactForm").on("submit", function (e) {
    sendFormData(e, "#contactForm", "contact");
  });

  $("#devisForm").on("submit", function (e) {
    sendFormData(e, "#devisForm", "devis");
  });
  $("#accueilForm").on("submit", function (e) {
    sendFormData(e, "#accueilForm", "accueil");
  });

  function sendFormData(e, id, type) {
    e.preventDefault();
    $.ajax({
      url: $(id)[0]["action"],
      type: "POST",
      data: $(id).serialize(),
      datatype: "json",
      success: function (data, response, message) {
        console.log(response)
        if (type === "contact") {
          document
            .querySelector("#contact-form-response")
            .classList.add("success");
          document.querySelector(
            "#contact-form-response"
          ).innerHTML = successMessage;
        }
        if (type === "devis") {
          document
            .querySelector("#devis-form-response")
            .classList.add("success");
          document.querySelector(
            "#devis-form-response"
          ).innerHTML = successMessage;
        }
        if (type === "accueil") {
          document
            .querySelector("#accueil-form-response")
            .classList.add("success");
          document.querySelector(
            "#accueil-form-response"
          ).innerHTML = successMessage;
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown, jqXHR)
        if (type === "contact") {
          document
            .querySelector("#contact-form-response")
            .classList.add("error");
          document.querySelector(
            "#contact-form-response"
          ).innerHTML = ErrorMessage;
        }
        if (type === "devis") {
          document.querySelector("#devis-form-response").classList.add("error");
          document.querySelector(
            "#devis-form-response"
          ).innerHTML = ErrorMessage;
          console.log(textStatus);
        }
        if (type === "accueil") {
          document.querySelector("#accueil-form-response").classList.add("error");
          document.querySelector(
            "#accueil-form-response"
          ).innerHTML = ErrorMessage;
          console.log(textStatus);
        }
      },
    });
  }
});

var CaptchaCallback = function () {
  jQuery(".g-recaptcha").each(function () {
    grecaptcha.render(this, {
      sitekey: "6LeIMIMcAAAAACI6_ItZ9yI8f8ljMUrvN1zQk7o0",
      callback: correctCaptcha,
    });
  });
};

function correctCaptcha() {
  if (grecaptcha === undefined) {
    return;
  }
  console.log(grecaptcha.getResponse());
  document.querySelectorAll(".g-recaptcha").forEach((checkbox) => {
    checkbox.classList.add("hidden");
  });
  document.querySelectorAll(".form-submit").forEach((button) => {
    button.classList.remove("disabled");
    button.innerHTML = "Envoyer";
  });
}

