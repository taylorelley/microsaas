export default function TripSelector() {

  const [activeStep, setActiveStep] = useState(0);

  switch(activeStep) {
    case 0: 
      return <TripTypeForm />;

    case 1:
      return <ClimateForm />;
    
    default:
      return <h2>Trip Selector</h2>;
  }

}
