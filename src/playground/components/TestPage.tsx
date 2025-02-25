import { motion } from 'framer-motion'
import { Button, Flex, Text, Card } from '@radix-ui/themes'
import { useState } from 'react'

export const TestPage = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Feature Testing Playground
        </h1>

        {/* Animation Test Section */}
        <Card className="mb-8 border border-slate-700" style={{ background: 'rgba(30, 41, 59, 0.5)' }}>
          <div className="p-6">
            <Text size="5" className="font-bold mb-4 text-white">Animation Test</Text>
            <Flex direction="column" gap="4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="3"
                  onClick={() => setCount(prev => prev + 1)}
                  style={{ width: '100%', background: '#3b82f6', color: 'white' }}
                  className="hover:bg-blue-600 transition-colors"
                >
                  Click me! Count: {count}
                </Button>
              </motion.div>
            </Flex>
          </div>
        </Card>

        {/* Responsive Grid Test */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item * 0.2 }}
            >
              <Card className="border border-slate-700" style={{ background: 'rgba(30, 41, 59, 0.5)' }}>
                <div className="p-4 h-40">
                  <Text size="3" className="text-white">Responsive Card {item}</Text>
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mt-4"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Elements Test */}
        <Card className="border border-slate-700" style={{ background: 'rgba(30, 41, 59, 0.5)' }}>
          <div className="p-6">
            <Text size="5" className="font-bold mb-4 text-white">Interactive Elements</Text>
            <Flex direction="column" gap="4">
              <div className="group relative overflow-hidden rounded-lg bg-slate-800">
                <motion.div
                  className="w-full h-48 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
                    alt="Random"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Text className="text-white font-bold">Hover Effect</Text>
                  </div>
                </motion.div>
              </div>
            </Flex>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}