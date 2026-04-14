import { motion } from 'framer-motion'

const text = 'The way you texted…\n\nlike it actually mattered.\n\nAsking about my day…\nabout my family…\n\nasking me “Kaicho”…\n\n\nand calling me\nwhen I wasn’t okay.'

export default function Screen6({ onNext, onBack, isFirst, isLast, direction }) {
  const swipeThreshold = 60

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -swipeThreshold && !isLast) onNext()
    if (info.offset.x > swipeThreshold && !isFirst) onBack()
  }

  return (
    <>
      <motion.button
        className="nav-button back-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={onBack}
        disabled={isFirst}
      >
        ← Back
      </motion.button>

      <motion.section
        className="screen screen6-background"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <motion.div
          className="screen6-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          aria-hidden="true"
        />
        <p className="story-text screen6-text">{text}</p>
        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
