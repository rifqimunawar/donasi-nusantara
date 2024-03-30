<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class EmailForDonatur extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    protected $toDonatur;

    public function __construct($toDonatur)
    {
        $this->toDonatur = $toDonatur;
    }

    /**
     * Get the message envelope.
     */
    public function build()
    {
        return $this->view('mail.email-for-donatur')
                    ->with('toDonatur', $this->toDonatur)
                    ->subject('Terima Kasih');
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
