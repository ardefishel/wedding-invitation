import { createFileRoute } from '@tanstack/react-router'
import './index.css'

export const Route = createFileRoute('/')({
  component: WeddingInvitation,
})

function WeddingInvitation() {
  return (
    <div className="invitation-container">
      <div className="invitation-card">
        <div className="decoration-top">
          <span className="floral">❦</span>
        </div>

        <p className="invitation-pre-title">Together with their families</p>

        <h1 className="wedding-names">
          Thalita <span className="ampersand">&</span> Rama
        </h1>

        <p className="invitation-date">Are getting married</p>

        <div className="wedding-details">
          <div className="detail-item">
            <p className="detail-label">When</p>
            <p className="detail-value">Saturday, December 27, 2025</p>
            <p className="detail-time">4:00 PM</p>
          </div>

          <div className="divider">
            <span className="floral small">❦</span>
          </div>

          <div className="detail-item">
            <p className="detail-label">Where</p>
            <p className="detail-value">The Grand Ballroom</p>
            <p className="detail-location">Hotel Indonesia Kempinski</p>
            <p className="detail-address">Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="invitation-footer">
          <p className="reception-note">Reception to follow</p>
          <div className="decoration-bottom">
            <span className="floral">❦</span>
          </div>
        </div>
      </div>
    </div>
  )
}
