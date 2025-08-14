import { CORE_CONCEPTS } from '../../data.js';
import Section from '../Section.jsx';
import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import './CoreConcepts.css';

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
