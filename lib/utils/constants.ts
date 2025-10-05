import { 
  Scale, 
  Zap, 
  HeartHandshake, 
  Award, 
  Target, 
  BriefcaseBusiness, 
  Building, 
  Shield, 
  Home, 
  Heart, 
  Users,
  FileText,
  Rocket,
  Globe,
  GraduationCap,
  Monitor,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
} from 'lucide-react';

// Hero Section Data
export const heroData = {
  badge: {
    icon: Scale,
    text: "12+ năm kinh nghiệm hành nghề"
  },
  heading: {
    title: "Đối tác pháp lý đáng tin cậy của bạn",
    description: "Văn phòng luật sư Tùng Lâm cung cấp dịch vụ đại diện pháp lý cho khách hàng trên mọi lĩnh vực hành nghề"
  },
  buttons: [
    {
      href: "/contact",
      text: "ĐẶT LỊCH HẸN",
      icon: Calendar,
      variant: "primary" as const
    },
    {
      href: "/services",
      text: "Tham khảo dịch vụ",
      variant: "secondary" as const
    }
  ],
  features: [
    {
      icon: BriefcaseBusiness,
      title: "Chuyên nghiệp",
      description: "10+ năm kinh nghiệm hành nghề"
    },
    {
      icon: Users,
      title: "Tận tâm",
      description: "Đặt khách hàng là trọng tâm"
    },
    {
      icon: Clock,
      title: "24/7",
      description: "Hỗ trợ"
    }
  ]
};

// Core Values Section Data
export const coreValuesData = {
  badge: {
    icon: Target,
    text: "Giá trị cốt lõi"
  },
  heading: {
    title: "Xuất sắc trong tố tụng,",
    subtitle: "Chính trực trong mọi hành động",
    description: "Chúng tôi kết hợp kinh nghiệm pháp lý xây dựng trong 1 thập kỷ qua với các phương pháp tiếp cận sáng tạo để mang lại kết quả vượt mong đợi."
  },
  cards: [
    {
      icon: Zap,
      title: "Hướng đến sự hiệu quả",
      description: "Chúng tôi tập trung vào việc đạt được kết quả tốt nhất có thể cho khách hàng thông qua tư duy chiến lược và hoạt động văn sự đội với vụ việc.",
      link: {
        href: "#",
        text: "Hiệu quả cao",
        icon: Zap
      }
    },
    {
      icon: HeartHandshake,
      title: "Khách hàng làm trọng tâm",
      description: "Mỗi vị khách đều mong muốn nhận được sự quan tâm riêng và các chiến lược pháp lý được hợp với hoàn cảnh riêng của họ.",
      link: {
        href: "#",
        text: "Hỗ trợ 24/7",
        icon: Users
      }
    },
    {
      icon: Scale,
      title: "Đạo đức nghề nghiệp",
      description: "Chúng tôi duy trì các tiêu chuẩn đạo đức cao nhất đồng thời cung cấp thông tin liên lạc minh bạch trong suốt quá trình xử lý vụ việc của bạn.",
      link: {
        href: "#",
        text: "Hỗ trợ 24/7",
        icon: Award
      }
    }
  ]
};

// Services Section Data
export const servicesData = {
  badge: {
    icon: FileText,
    text: "Lĩnh vực hành nghề"
  },
  heading: {
    title: "Dịch vụ pháp lý toàn diện",
    subtitle: "Trên tất cả các lĩnh vực hành nghề",
    description: "Từ các hợp đồng giao dịch phức tạp đến các khiếu nại dân sự, bảo chữa dương sự hình sự, Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ đại diện chuyên môn trên nhiều lĩnh vực pháp luật."
  },
  services: [
    {
      icon: BriefcaseBusiness,
      title: "Luật Doanh nghiệp",
      description: "Thành lập doanh nghiệp.Mua bán vốn góp chuyển nhượng cổ phần,tham gia các tổ chức tự doanh và tài chính khác.",
      href: "/activity/corporate",
      buttonText: "Tham khảo về Luật Doanh nghiệp"
    },
    {
      icon: Users,
      title: "Luật Dân sự",
      description: "Giải quyết các vụ việc tranh chấp hợp đồng dân sự.Tranh chấp tư liệu thương tố và các hành vi vi dân tích.",
      href: "/activity/civil",
      buttonText: "Tham khảo về Luật Dân sự"
    },
    {
      icon: Heart,
      title: "Luật Hôn nhân và Gia đình",
      description: "Tư vấn, hướng dẫn xin thành thủ tục giải ly hôn, chia tài sản chung giữa vợ và chồng,quyền nuôi con và các vấn đề khác.",
      href: "/activity/family",
      buttonText: "Tìm hiểu về Luật Hôn nhân Gia đình"
    },
    {
      icon: Home,
      title: "Luật Đất đai",
      description: "Tư vấn các thủ tục pháp lý liên quan đến việc sử dụng đất đai.Tách thửa họp đông và cấp bàng sở hữu nhà ở.Điều kiện của việc chuyển nhượng quyền sử dụng đất và tài sản khác.",
      href: "/activity/real-estate",
      buttonText: "Tham khảo về Luật Đất đai"
    },
    {
      icon: Shield,
      title: "Luật Hình sự",
      description: "Bào chữa tích cực cho bị cáo và bị can trong lĩnh vực tội phạm diện về an toàn tổng lê và dân chủ.",
      href: "/activity/criminal",
      buttonText: "Tham khảo về Luật Hình sự"
    },
    {
      icon: Building,
      title: "Luật Lao động",
      description: "Tư vấn và hỗ trợ giải quyết các tranh chấp lao động.Thành lập hợp đồng và phàn xử về chính sách lao động.",
      href: "/activity/labor",
      buttonText: "Tham khảo về Luật Lao động"
    }
  ],
  cta: {
    href: "/activity",
    text: "Tham khảo lĩnh vực hành nghề"
  }
};

// Value Proposition Section Data
export const valuePropositionData = {
  badge: {
    icon: Rocket,
    text: "Dịch vụ khác"
  },
  heading: {
    title: "Không chỉ là dịch vụ pháp lý",
    description: "Là luật sư hành nghề, chúng tôi hiểu những thách thức mà các công ty luật hiện đại phải đối mặt. Đó là lý do tại sao chúng tôi mở rộng dịch vụ của mình để bao gồm phát triển web chuyên nghiệp và giáo dục pháp lý - giúp bạn thành công trong thế giới kỹ thuật số ngày nay."
  },
  features: [
    {
      icon: Globe,
      title: "Dịch vụ Website chuyên nghiệp",
      description: "Các trang web tùy chỉnh được thiết kế riêng cho các cá nhân tổ chức và dịch vụ pháp lý, công ty với thiết kế hiện đại, tối ưu hóa SEO và quản trị pháp lý."
    },
    {
      icon: GraduationCap,
      title: "Lớp học và khóa học đào tạo nghiệp vụ pháp lý",
      description: "Các khóa học chuyên nghiệp về lập học nghiệp và đào tạo pháp lý nhằm giúp sinh viên nắm bắt đầy đủ các kiến thức cần thiết để giỏi kinh nghiệm gáng đây chủ các."
    }
  ],
  buttons: [
    {
      href: "/services/website",
      text: "Đến dịch vụ Website",
      icon: Globe,
      variant: "primary" as const
    },
    {
      href: "/course",
      text: "Tham khảo khóa học",
      icon: BookOpen,
      variant: "secondary" as const
    }
  ],
  stats: [
    {
      icon: Monitor,
      title: "50+ Websites mẫu",
      description: "Xây dựng cho đa ngành nghề"
    },
    {
      icon: Users,
      title: "Học viên",
      description: "Được đào tạo và hướng dẫn"
    },
    {
      icon: Award,
      title: "25+ Khóa học",
      description: "Chương trình hành nghề Luật"
    }
  ]
};

// Blog Section Data
export const blogData = {
  badge: {
    icon: BookOpen,
    text: "Blog tham khảo"
  },
  heading: {
    title: "Blog cập nhật gần đây nhất",
    description: "Cập nhật những blog thông tin mới nhất về pháp luật, nghiên cứu tình huống và các cập nhật quan trọng về pháp lý nhà nước. Ngoài ra, Blog cũng cập nhật các bài viết liên quan đến các dịch vụ mà văn phòng đương nhiệm."
  },
  cta: {
    href: "/blog",
    text: "Đến trang Blog"
  },
  posts: [
    {
      id: 1,
      image: "/no_image.jpg",
      category: {
        icon: Scale,
        text: "Luật doanh nghiệp"
      },
      title: "Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?",
      description: "So sánh chi tiết các cơ cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu cụ thể của mình.",
      author: "Luật sư Lê Song Tùng",
      readTime: "6 phút",
      date: "Ngày 5 tháng 6 năm 2025",
      href: "/blog/thanh-lap-doanh-nghiep"
    },
    {
      id: 2,
      image: "/no_image.jpg",
      category: {
        icon: Scale,
        text: "Luật doanh nghiệp"
      },
      title: "Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?",
      description: "So sánh chi tiết các cơ cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu cụ thể của mình.",
      author: "Luật sư Lê Song Tùng",
      readTime: "6 phút",
      date: "Ngày 5 tháng 6 năm 2025",
      href: "/blog/thanh-lap-doanh-nghiep"
    },
    {
      id: 3,
      image: "/no_image.jpg",
      category: {
        icon: Scale,
        text: "Luật doanh nghiệp"
      },
      title: "Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?",
      description: "So sánh chi tiết các cơ cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu cụ thể của mình.",
      author: "Luật sư Lê Song Tùng",
      readTime: "6 phút",
      date: "Ngày 5 tháng 6 năm 2025",
      href: "/blog/thanh-lap-doanh-nghiep"
    }
  ]
};

// Contact Section Data
export const contactData = {
  badge: {
    icon: Phone,
    text: "Liên hệ hôm nay"
  },
  heading: {
    title: "Bạn đã sẵn sàng thảo luận",
    subtitle: "về vấn đề pháp lý của bạn ?",
    description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn. Văn phòng Luật sư Tùng Lâm sẵn sàng cung cấp hướng dẫn chuyên môn pháp lý và sự đại diện tích cực mà bạn xứng đáng được hưởng."
  },
  contactInfo: [
    {
      icon: Phone,
      title: "Liên hệ chúng tôi",
      details: [
        "Luật sư Lê Song Tùng - Trưởng văn phòng 0938571549",
        "Bà Lê Thị Liên - 0901373986"
      ]
    },
    {
      icon: Mail,
      title: "Email liên hệ",
      details: [
        "ls.songtung@yahoo.com - Luật sư Lê Song Tùng",
        "Tuandungvuive@gmail.com- Cộng sự Lê Anh Tuấn Dũng"
      ]
    },
    {
      icon: MapPin,
      title: "Địa chỉ văn phòng",
      details: [
        "399 Bình Lợi, phường Bình Lợi Trung,Thành phố Hồ Chí Minh (Văn phòng Luật sư Tùng Lâm)"
      ]
    }
  ],
  buttons: [
    {
      href: "/contact",
      text: "Đặt lịch hẹn",
      icon: Calendar,
      variant: "primary" as const
    },
    {
      href: "/contact",
      text: "Liên hệ chúng tôi",
      variant: "secondary" as const
    }
  ],
  form: {
    title: "Form liên hệ nhanh",
    fields: {
      name: {
        label: "Họ và tên",
        placeholder: ""
      },
      email: {
        label: "Email",
        placeholder: "info@email.com"
      },
      phone: {
        label: "Số điện thoại",
        placeholder: "0903874986"
      },
      message: {
        label: "Mô tả ngắn gọn về vấn đề pháp lý của bạn",
        placeholder: "Type your message..."
      }
    },
    submitButton: {
      text: "Gửi tin nhắn",
      icon: Mail
    }
  }
};
