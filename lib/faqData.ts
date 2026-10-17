export interface FaqItem {
  question: string
  answer: string
  category: string
}

export const faqs: FaqItem[] = [
  {
    category: 'Privacy',
    question: 'Does BlinkQuest record my face or upload camera video to the cloud?',
    answer:
      'Never. BlinkQuest processes camera frames 100% on-device in volatile RAM using Google MediaPipe. As soon as the 478 facial landmark coordinates are calculated, the raw video frame is permanently discarded. No images or videos are ever stored on disk or transmitted across the internet.',
  },
  {
    category: 'Ophthalmology',
    question: 'How does the 20-20-20 rule relieve digital eye strain?',
    answer:
      'When staring at screens, your spontaneous blink rate drops from 18 blinks per minute to under 6, causing rapid tear film evaporation. The 20-20-20 rule prescribes looking at an object at least 20 feet away for 20 seconds every 20 minutes, which relaxes the ciliary eye muscles and triggers natural full-closure blinks to lubricate the cornea.',
  },
  {
    category: 'Hardware',
    question: 'Can I use BlinkQuest with glasses or contact lenses?',
    answer:
      'Yes! MediaPipe 478-landmark tracking is trained on diverse lighting environments and eyewear. It accurately tracks iris position, gaze vectors, and eyelid aperture whether you are wearing anti-glare prescription lenses, reading glasses, or soft contacts.',
  },
  {
    category: 'Offline',
    question: 'Does BlinkQuest work without an active internet connection?',
    answer:
      'Yes. BlinkQuest is completely offline-first. All machine learning models (TFLite MediaPipe) are bundled directly inside the APK. You can play gaze games and recharge your Eye Battery on an airplane or in areas with zero cellular reception.',
  },
  {
    category: 'Product',
    question: 'What is the Eye Battery and how is it calculated?',
    answer:
      'The Eye Battery is a dynamic fatigue metric that starts at 100% every morning. Prolonged uninterrupted screen exposure drains it, while completing camera-verified breaks, intentional blink sessions, and near/far focus cycles tops it back up to optimal levels.',
  },
  {
    category: 'Medical',
    question: 'Is BlinkQuest a medical diagnostic device?',
    answer:
      'No. BlinkQuest is a digital wellness and habit-building tool designed to support ergonomic screen hygiene. It does not diagnose, treat, or prevent any clinical ocular condition such as glaucoma, cataracts, or maculopathy. If you experience severe eye pain or sudden vision loss, consult a licensed optometrist or ophthalmologist immediately.',
  },
  {
    category: 'Ecosystem',
    question: 'How does Setu SSO integration work with BlinkQuest?',
    answer:
      'Setu SSO provides decentralized, privacy-respecting identity federation. You can authenticate across your personal devices with zero third-party tracking, preserving your streaks and achievements without exposing your browsing habits.',
  },
]
