import React from 'react';
import "./faqs.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default () => {
  return (
    <div className='faq-Body'>
      <div className="heading-section">
        <p className="heading">FAQs</p>
      </div>
      <div>
        <Accordion
          style={{ border: '1px solid white', borderRadius: '10px', marginBottom: '8px' }} // Set border color and radius
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '40px', height: '40px', color: 'var(--css-primary)' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: 'var(--css-black)', color: 'var(--css-white)', borderRadius: '10px' }} // Customize background and text color
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor: 'var(--css-white)', color: 'var(--css-black)', borderRadius: '10px'}}>
            <Typography>
              Yes! It is 100% free, and has 0% ads!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ border: '1px solid white', borderRadius: '10px', marginBottom: '8px' }} // Set border color and radius
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '40px', height: '40px', color: 'var(--css-primary)' }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={{ backgroundColor: 'var(--css-black)', color: 'var(--css-white)', borderRadius: '10px' }} // Customize background and text color
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: 'var(--css-white)', color: 'var(--css-black)', borderRadius: '10px'}}>
            <Typography>
              Sorry, unfortunately, we don't provide the service to download any songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
