import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import BookmarkItem from './UI/Bookmark'

const BookMarkLists: () => JSX.Element = () => {
  interface Site {
    name: string
    url: string
  }

  interface Topic {
    group: string
    number: number
    subject: string
    siteCount: number
    lastModified: string
    minCreated: string
    sites: Site[]
  }

  const topics: Topic[] = [
    {
      group: 'Group 1',
      number: 1,
      subject: 'Topic 1',
      siteCount: 2,
      lastModified: '2023-07-22',
      minCreated: '2023-01-01',
      sites: [
        { name: 'Site 1', url: 'https://site1.com' },
        { name: 'Site 2', url: 'https://site2.com' }
      ]
    }
    // 다른 주제들도 동일한 형식으로 추가하면 됩니다.
  ]

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>그룹</TableCell>
            <TableCell>번호</TableCell>
            <TableCell>주제</TableCell>
            <TableCell>사이트 수</TableCell>
            <TableCell>최종 수정일</TableCell>
            <TableCell>최소 생성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topics.map((topic, index) => (
            <BookmarkItem topic={topic} index={index} key={topic.number} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BookMarkLists
