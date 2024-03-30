<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DonasiInputEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    protected $data_donatur;

    public function __construct($data_donatur)
    {
        $this->data_donatur = $data_donatur;
    }

    /**
     * Get the message envelope.
     */
    public function build()
    {
        return $this->view('mail.donasi-input')
                    ->with('data_donatur', $this->data_donatur)
                    ->subject('Donasi Masuk!!');
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
