import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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

interface BookMarkItemProp {
  topic: Topic
  index: number
}

const BookmarkItem = ({ topic, index }: BookMarkItemProp) => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    return setExpanded(isExpanded ? panel : false)
  }

  return (
    <TableRow>
      <TableCell colSpan={6}>
        <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <TableCell>{topic.group}</TableCell>
            <TableCell>{topic.number}</TableCell>
            <TableCell>{topic.subject}</TableCell>
            <TableCell>{topic.siteCount}</TableCell>
            <TableCell>{topic.lastModified}</TableCell>
            <TableCell>{topic.minCreated}</TableCell>
          </AccordionSummary>
          <AccordionDetails>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>사이트 이름</TableCell>
                  <TableCell>URL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topic.sites.map((site, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{site.name}</TableCell>
                    <TableCell>
                      <a href={site.url} target="_blank" rel="noopener noreferrer">
                        {site.url}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
      </TableCell>
    </TableRow>
  )
}

export default BookmarkItem
