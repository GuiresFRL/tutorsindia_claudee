import ZohoFormEmbed from "@/components/ui/ZohoFormEmbed";

const ZOHO_IFRAME_ID = "ziframe_750654";
const ZOHO_FORM_SRC =
  "https://forms.zohopublic.com/guiressolutions1/form/ContactForm3/formperma/kG-dX5svNiZ1wPMx9Yoju0Md1G3W2JiACCsCWVcDGLY";

export default function QuickEnquiryForm() {
  return <ZohoFormEmbed id={ZOHO_IFRAME_ID} src={ZOHO_FORM_SRC} ariaLabel="Contact Form" height={780} />;
}
