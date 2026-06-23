import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import type { SocialKind } from '../types/portfolio';

export function getSocialIcon(kind: SocialKind) {
  switch (kind) {
    case 'email':
      return Mail;
    case 'github':
      return Github;
    case 'linkedin':
      return Linkedin;
    case 'facebook':
      return MessageCircle;
    default:
      return Mail;
  }
}
