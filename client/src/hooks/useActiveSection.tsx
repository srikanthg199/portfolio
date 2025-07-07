import { useEffect, useState } from 'react';
import { NAVIGATION_ITEMS } from '@/lib/constants';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = NAVIGATION_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean);
    
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          if (currentId) {
            setActiveSection(currentId);
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return { activeSection };
};
