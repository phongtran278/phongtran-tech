export type BlogSection = {
  id:string
  title:string
  body:string[]
  quote?:string
  bullets?:string[]
  subheading?:string
}

export type BlogPost = {
  slug:string
  title:string
  dek:string
  category:string
  date:string
  readTime:string
  intro:string
  sections:BlogSection[]
}

export const blogPosts:BlogPost[] = [
  {
    slug:'de-may-lam-phan-may-gioi',
    title:'Để máy làm phần máy giỏi, giữ phần người cho con người.',
    dek:'Tui không học automation để làm ít đi. Tui học nó để dành thời gian cho những phần của công việc thật sự cần mắt, tay và đầu óc của một designer.',
    category:'Design × Automation',
    date:'29 Sep 2026',
    readTime:'7 min read',
    intro:'Có một thời gian tui nghĩ làm nhanh đồng nghĩa với làm ẩu. Sau đó tui nhận ra vấn đề không nằm ở tốc độ — mà ở chuyện mình đang tăng tốc phần nào.',
    sections:[
      {
        id:'cong-viec-lap-lai',
        title:'Có những việc không đáng để con người lặp lại',
        body:[
          'Trong công việc design, có những thao tác rất nhỏ nhưng xuất hiện hàng chục, hàng trăm lần: đổi tên file, xuất nhiều phiên bản, nhập dữ liệu, gom link, kiểm tra thông tin, tạo lại cùng một cấu trúc.',
          'Từng việc riêng lẻ không khó. Nhưng khi cộng lại, nó ăn hết phần năng lượng đáng lẽ dành cho concept, art direction và cách kể chuyện.'
        ],
        quote:'Nếu một việc luôn được làm theo cùng một quy luật, tui sẽ tự hỏi: tại sao mình còn phải làm nó bằng tay?'
      },
      {
        id:'automation-khong-thay-the-tham-my',
        title:'Automation không thay thế thẩm mỹ',
        body:[
          'Script có thể xuất 100 file đúng tên. Nó không biết tấm nào có nhịp tốt hơn. Một hệ thống có thể fill dữ liệu vào layout. Nó không biết khi nào nên phá grid để câu chuyện mạnh hơn.',
          'Đó là ranh giới tui thấy thú vị: máy cực kỳ giỏi ở sự chính xác và lặp lại; con người vẫn giỏi ở ý nghĩa, ngữ cảnh và quyết định thẩm mỹ.'
        ],
        bullets:['Máy: lặp lại, kiểm tra, chuyển đổi, đồng bộ.','Người: chọn lọc, cảm nhận, kể chuyện, chịu trách nhiệm cho quyết định.']
      },
      {
        id:'designer-biet-build',
        title:'Designer biết build có thêm một lớp tự do',
        body:[
          'Trước đây, khi thấy một workflow bất tiện, tui thường nghĩ “giá mà phần mềm có chức năng này”. Bây giờ phản xạ bắt đầu đổi thành “thử làm một bản nhỏ xem sao”.',
          'Không phải mọi designer đều cần trở thành developer. Nhưng hiểu code đủ để biến một vấn đề lặp lại thành một tool nhỏ là một loại đòn bẩy rất đáng giá.'
        ]
      },
      {
        id:'quy-tac-ca-nhan',
        title:'Quy tắc cá nhân của tui',
        subheading:'Giữ phần người cho con người.',
        body:[
          'Tui vẫn thích những thứ thủ công: chỉnh một khoảng trắng cho vừa mắt, lựa một hình đúng cảm xúc, vẽ lại một chi tiết cho tới khi nó “đúng”.',
          'Nhưng tui không lãng mạn hóa những thao tác vô nghĩa. Nếu máy làm tốt hơn, tui để máy làm. Tui muốn phần thủ công còn lại là phần đáng để thủ công.'
        ]
      }
    ]
  },
  {
    slug:'designer-tu-build-thu-minh-muon-dung',
    title:'Từ designer tới người tự build thứ mình muốn dùng.',
    dek:'Không phải đổi nghề. Chỉ là khoảng cách từ “giá mà có cái này” tới “để tui thử làm” đang ngắn lại.',
    category:'Building in public',
    date:'27 Sep 2026',
    readTime:'8 min read',
    intro:'Tui vẫn là designer. Design vẫn là cái gốc giúp tui kiếm tiền, nhìn vấn đề và đánh giá cái gì đủ tốt để đưa ra ngoài. Code chỉ làm cái gốc đó mọc thêm nhánh.',
    sections:[
      {
        id:'bat-dau-tu-friction',
        title:'Tui thường bắt đầu từ một cái “cấn”',
        body:[
          'PlotFlow, Dictly hay những tool nhỏ tui làm đều không bắt đầu bằng câu hỏi “nên build startup gì?”. Nó bắt đầu bằng một chỗ bất tiện trong đời sống hoặc công việc.',
          'Một cái cấn đủ nhỏ thì dễ bỏ qua. Nhưng nếu nó lặp lại mỗi ngày, tui bắt đầu tò mò xem có cách nào làm nó biến mất.'
        ],
        quote:'Problem first. Product second.'
      },
      {
        id:'prototype-truoc',
        title:'Prototype trước khi nghĩ lớn',
        body:[
          'Tui thích làm bản nhỏ nhất có thể dùng được. Một màn hình. Một flow. Một script. Một chức năng giải quyết đúng một việc.',
          'Bản nhỏ làm lộ vấn đề thật nhanh hơn bất kỳ slide chiến lược nào: người dùng có hiểu không, thao tác có tự nhiên không, và mình có còn muốn dùng nó sau ba ngày không?'
        ]
      },
      {
        id:'design-la-loi-the',
        title:'Design không phải lớp sơn cuối',
        body:[
          'Lợi thế của tui khi học build là tui không bắt đầu từ code. Tui bắt đầu từ cách người ta nhìn, đọc, hiểu và ra quyết định.',
          'Khi tự code, tui thấy rõ hơn rằng spacing, state, feedback, loading, error hay naming đều là design. UI chỉ là phần nhìn thấy được của một hệ thống lớn hơn.'
        ],
        bullets:['Bắt đầu bằng friction thật.','Làm một flow nhỏ chạy được.','Dùng chính nó.','Quan sát chỗ còn cấn.','Lặp lại.']
      },
      {
        id:'khong-can-doi-nghe',
        title:'Không cần đổi nghề để tiến hóa',
        body:[
          'Tui không có nhu cầu xóa chữ Graphic Designer khỏi tên mình. Ngược lại, tui muốn nó mạnh hơn: một designer có thể prototype, hiểu dữ liệu, tự động hóa workflow và nói chuyện được với kỹ thuật.',
          'Nếu sau này chức danh thay đổi, nó nên là kết quả của những thứ tui làm được — không phải vì tui vội đổi label.'
        ]
      }
    ]
  },
  {
    slug:'doi-lam-phong-tran',
    title:'Đời lắm Phong Trần.',
    dek:'Một ghi chú về quá khứ, hiện tại và tương lai của một người vẫn chưa hết tò mò.',
    category:'Life / Notes',
    date:'25 Sep 2026',
    readTime:'6 min read',
    intro:'Tên mình đôi khi nghe giống một câu mô tả. Tui thấy vui nên giữ nó lại: đời lắm Phong Trần — có chút va vấp, chút thử nghiệm, và khá nhiều lần tự hỏi “hay là làm thử cái này?”.',
    sections:[
      {
        id:'qua-khu',
        title:'Quá khứ: học cách nhìn',
        body:[
          'Design cho tui một cách nhìn thế giới bằng hierarchy, khoảng trắng, nhịp điệu và cảm xúc. Làm lâu rồi mới thấy kỹ năng quan trọng nhất không phải dùng tool nhanh, mà là biết cái gì nên xuất hiện và cái gì nên bỏ.',
          'Những năm làm F&B, education, real estate hay những job rất khác nhau giúp tui thấy một layout đẹp chưa chắc đã giải quyết đúng vấn đề.'
        ]
      },
      {
        id:'hien-tai',
        title:'Hiện tại: học cách làm',
        body:[
          'Tui đang học code không phải để chạy khỏi design. Tui học vì ngày càng có nhiều ý tưởng tui muốn tự kiểm chứng thay vì chỉ mô tả.',
          'Một website, một script, một automation hay một prototype cho phản hồi rất thật: nó chạy hoặc không chạy; người ta hiểu hoặc không hiểu.'
        ]
      },
      {
        id:'tuong-lai',
        title:'Tương lai: vẫn chưa muốn đóng khung',
        body:[
          'Tui thích ý tưởng trở thành một người đứng giữa design, product và technology. Không phải giỏi tất cả ngang nhau, mà đủ sâu ở design và đủ hiểu những phần còn lại để biến ý tưởng thành hệ thống.',
          'Có thể sau này nó có một chức danh rất đẹp. Hiện tại tui thích gọi đơn giản là một người tò mò đang build.'
        ],
        quote:'Tui không muốn tương lai chỉ là làm nhanh hơn những thứ mình đã biết. Tui muốn làm được những thứ hôm nay mình chưa biết cách làm.'
      },
      {
        id:'giu-lai-su-thu-cong',
        title:'Vẫn giữ lại sự thủ công',
        body:[
          'Càng dùng automation, tui càng thấy quý những phần không nên automate: chọn một câu chữ, chỉnh một nhịp hình, nói chuyện với một người, hoặc quyết định rằng một ý tưởng chưa đủ tốt.',
          'Có lẽ đó là hướng tui muốn đi: dùng công nghệ để bớt việc máy móc, chứ không để mình trở thành máy.'
        ]
      }
    ]
  }
]

export const getPost=(slug:string)=>blogPosts.find(p=>p.slug===slug)
