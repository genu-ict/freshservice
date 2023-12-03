function validateNdisClaimRef(event) {
  const claimRef = event.target;
  const regex = /^[0-9]{10}\/[0-9]{6}$/;
  const isValid = regex.test(claimRef);
  console.log(isValid);
}

window.onload = function () {
  /* Add event listner to all time input fields */
  document
    $('input[data-field-name*="ndis_claim_reference"').addEventListener("change", validateNdisClaimRef);
  console.log("genu script added");
};
