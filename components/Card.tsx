import Text from './Text'

interface CardProps {
  title: string
  description: string
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="border rounded shadow-lg p-4 m-4">
      <Text variant="h2" className="mb-2">{title}</Text>
      <Text variant="p">{description}</Text>
    </div>
  )
}

export default Card
