// TopicPage.jsx
import { useParams } from 'react-router-dom';

const TopicPage = () => {
  const { topicName } = useParams();

  const topicContent = {
    'Easy Global Chlorophyll-a Map': {
      description: 'Explore how chlorophyll concentrations are mapped globally using satellite data.',
      imageUrl: 'https://via.placeholder.com/600',
    },
    // Add more topics here...
  };

  const content = topicContent[decodeURIComponent(topicName)] || {
    description: 'Topic content not available.',
    imageUrl: 'https://via.placeholder.com/600',
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4">{decodeURIComponent(topicName)}</h2>
      <img src={content.imageUrl} alt={topicName} className="w-full max-w-md rounded mb-4" />
      <p className="text-gray-700 text-center max-w-2xl">{content.description}</p>
    </div>
  );
};

export default TopicPage;
