export type Profile = {
  id: number | string;
  name: string;
  age: number;
  location: string;
  distance: string;
  bio?: string;
  isPremium?: boolean;
  imageUrl: string;
  images?: string[];
  interests?: string[];
};

export const filters = ["All", "Nearby", "New", "Online", "Verified"];

export const stories = [
  { id: 1, name: "Priya", imageUrl: "https://images.unsplash.com/photo-1557353425-09253747c2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: 2, name: "Rahul", imageUrl: "https://images.unsplash.com/photo-1611095006856-19f5ffdca7f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: 3, name: "Ananya", imageUrl: "https://images.unsplash.com/photo-1701281482213-b4b02e57a7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: 4, name: "Arjun", imageUrl: "https://images.unsplash.com/photo-1653146889633-f06eb8489789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: 5, name: "Diya", imageUrl: "https://images.unsplash.com/photo-1723189038268-3ef8fd518ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
];

export const mockUsers: Profile[] = [
  {
    id: 1,
    name: "Priya",
    age: 24,
    location: "Mumbai",
    distance: "2 km away",
    bio: "Coffee dates ☕. Always looking for new cafes and spontaneous adventures.",
    isPremium: true,
    imageUrl: "https://images.unsplash.com/photo-1557353425-09253747c2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1557353425-09253747c2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    ],
    interests: ["Coffee", "Photography", "Travel", "Art Galleries"],
  },
  {
    id: 2,
    name: "Rahul",
    age: 26,
    location: "Delhi",
    distance: "5 km away",
    bio: "Adventure seeker 🏔️. If I'm not working, I'm probably hiking.",
    isPremium: false,
    imageUrl: "https://images.unsplash.com/photo-1611095006856-19f5ffdca7f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1611095006856-19f5ffdca7f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    ],
    interests: ["Hiking", "Fitness", "Live Music"],
  },
  {
    id: 3,
    name: "Ananya",
    age: 23,
    location: "Bangalore",
    distance: "3 km away",
    bio: "Foodie 🍜. I know all the best spots in town. Dog mom.",
    isPremium: false,
    imageUrl: "https://images.unsplash.com/photo-1701281482213-b4b02e57a7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    images: ["https://images.unsplash.com/photo-1701281482213-b4b02e57a7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"],
    interests: ["Food", "Dogs", "Reading"],
  },
  {
    id: 4,
    name: "Arjun",
    age: 25,
    location: "Pune",
    distance: "4 km away",
    imageUrl: "https://images.unsplash.com/photo-1653146889633-f06eb8489789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    images: ["https://images.unsplash.com/photo-1653146889633-f06eb8489789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"],
    bio: "Tech enthusiast and weekend cyclist. Looking for good conversations.",
    interests: ["Cycling", "Tech", "Movies"],
  },
  {
    id: 5,
    name: "Diya",
    age: 22,
    location: "Hyderabad",
    distance: "6 km away",
    bio: "Always dancing somewhere ✨",
    imageUrl: "https://images.unsplash.com/photo-1723189038268-3ef8fd518ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    images: ["https://images.unsplash.com/photo-1723189038268-3ef8fd518ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"],
    interests: ["Dance", "Music", "Fashion"],
  },
  {
    id: 6,
    name: "Maya",
    age: 24,
    location: "Chennai",
    distance: "7 km away",
    bio: "Sunsets and good vibes.",
    imageUrl: "https://images.unsplash.com/photo-1660152988640-99bcdecf2bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    images: ["https://images.unsplash.com/photo-1660152988640-99bcdecf2bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"],
    interests: ["Beach", "Nature", "Yoga"],
  },
];

export const mockMessages = [
  { id: 1, text: "Hey! How's it going? 👋", sent: false, time: "2:30 PM" },
  { id: 2, text: "Hi! I'm good, thanks! How about you?", sent: true, time: "2:32 PM" },
  { id: 3, text: "Doing great! Any fun plans for the weekend?", sent: false, time: "2:33 PM" },
  { id: 4, text: "Probably going hiking or trying a new cafe!", sent: true, time: "2:35 PM" },
];
