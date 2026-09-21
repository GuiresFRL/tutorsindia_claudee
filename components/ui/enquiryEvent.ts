// Any component can open the enquiry popup with:
//   window.dispatchEvent(new Event(OPEN_ENQUIRY_EVENT))
// Kept in its own module so the float buttons and the lazy loader can use it
// without importing EnquiryModal itself (which would defeat the code-split).
export const OPEN_ENQUIRY_EVENT = "tutorsindia:open-enquiry";
