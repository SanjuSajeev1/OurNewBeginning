import { motion } from 'framer-motion'

const text = 'We’ll figure it out slowly'

const sparkles = [
  { id: 1, left: '12%', top: '20%', delay: 0.2, duration: 10 },
  { id: 2, left: '24%', top: '38%', delay: 0.8, duration: 11.5 },
  { id: 3, left: '36%', top: '24%', delay: 1.1, duration: 9.6 },
  { id: 4, left: '48%', top: '42%', delay: 0.5, duration: 12 },
  { id: 5, left: '62%', top: '29%', delay: 1.6, duration: 10.8 },
  { id: 6, left: '74%', top: '37%', delay: 1.2, duration: 9.4 },
  { id: 7, left: '85%', top: '23%', delay: 0.4, duration: 11.2 },
]

const tinyHearts = [
  { id: 1, left: '40%', delay: 1.4, duration: 6.2 },
  { id: 2, left: '51%', delay: 2.1, duration: 6.8 },
  { id: 3, left: '59%', delay: 1.7, duration: 7.1 },
]

export default function Screen20({ onNext, onBack, isFirst, isLast, direction }) {
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
        className="screen screen20-romance"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: [1, 1.01] }}
        exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98 }}
        transition={{
          opacity: { duration: 1.2, ease: 'easeInOut' },
          x: { duration: 1.2, ease: 'easeInOut' },
          scale: { duration: 5, ease: 'easeInOut' },
        }}
      >
        <div className="screen20-hearts-outline" aria-hidden="true">
          <span className="screen20-heart-outline heart-a">♡</span>
          <span className="screen20-heart-outline heart-b">♡</span>
          <span className="screen20-heart-outline heart-c">♡</span>
        </div>

        <div className="screen20-sparkles" aria-hidden="true">
          {sparkles.map((sparkle) => (
            <motion.span
              key={sparkle.id}
              className="screen20-sparkle"
              style={{ left: sparkle.left, top: sparkle.top }}
              animate={{ x: [0, 8, -6, 0], y: [0, -6, 5, 0], opacity: [0.12, 0.3, 0.18, 0.12] }}
              transition={{
                duration: sparkle.duration,
                delay: sparkle.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <motion.p
          className="story-text screen20-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.02, 1],
            textShadow: [
              '0 0 8px rgba(255, 255, 255, 0.18)',
              '0 0 14px rgba(255, 255, 255, 0.3)',
              '0 0 8px rgba(255, 255, 255, 0.18)',
            ],
          }}
          transition={{
            opacity: { duration: 1.8, ease: 'easeInOut' },
            y: { duration: 1.8, ease: 'easeInOut' },
            scale: { duration: 3.4, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY },
            textShadow: { duration: 3.4, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY },
          }}
        >
          {text}
        </motion.p>

        <div className="screen20-tiny-hearts" aria-hidden="true">
          {tinyHearts.map((heart) => (
            <motion.span
              key={heart.id}
              className="screen20-tiny-heart"
              style={{ left: heart.left }}
              animate={{ y: [6, -20], opacity: [0, 0.45, 0] }}
              transition={{
                duration: heart.duration,
                delay: heart.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              ❤
            </motion.span>
          ))}
        </div>

        <p className="swipe-hint">Slide left for next, right for back</p>
      </motion.section>
    </>
  )
}
